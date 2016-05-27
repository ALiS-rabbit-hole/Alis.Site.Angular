(function () {
    var showErrorsModule = angular.module('ui.bootstrap.showErrors', []);

    showErrorsModule.config(function ($httpProvider) {
        $httpProvider.interceptors.push('fieldValInterceptor');
    });

    showErrorsModule.directive('showErrors', [
      '$timeout', 'showErrorsConfig', '$interpolate', function ($timeout, showErrorsConfig, $interpolate) {
            var getShowSuccess, getTrigger, linkFn, previousErrors;
          getTrigger = function (options) {
              var trigger;
              trigger = showErrorsConfig.trigger;
              if (options && (options.trigger != null)) {
                  trigger = options.trigger;
              }
              return trigger;
          };
          getShowSuccess = function (options) {
              var showSuccess;
              showSuccess = showErrorsConfig.showSuccess;
              if (options && (options.showSuccess != null)) {
                  showSuccess = options.showSuccess;
              }
              return showSuccess;
          };
          linkFn = function (scope, el, attrs, formCtrl) {
              var blurred, inputEl, inputName, inputNgEl, options, showSuccess, toggleClasses, trigger;
              blurred = false;
              options = scope.$eval(attrs.showErrors);
              showSuccess = getShowSuccess(options);
              trigger = getTrigger(options);
              inputEl = el[0].querySelector('.form-control[name]');
              inputNgEl = angular.element(inputEl);
              inputName = $interpolate(inputNgEl.attr('name') || '')(scope);
              if (!inputName) {
                  throw "show-errors element has no child input elements with a 'name' attribute and a 'form-control' class";
              }
              inputNgEl.bind(trigger, function () {
                  blurred = true;
                  return toggleClasses(formCtrl[inputName].$invalid);
              });
              scope.$watch(function () {
                  return formCtrl[inputName] && formCtrl[inputName].$invalid;
              }, function (invalid) {
                  if (!blurred) {
                      return;
                  }
                  return toggleClasses(invalid);
              });
              scope.$on('_ERROR_FIELDS_', function (event, args) {
                  return $timeout(function () {
                      //we flag up fields as invalid and add the message against as returned by the server
                      var serverValidations = previousErrors = args.ErrorFields;
                      var prop;
                      var mainErrors = [];
                      scope.main_errors = null;
                      for (prop in serverValidations) {
                          if (serverValidations.hasOwnProperty(prop)) {
                              if (formCtrl[serverValidations[prop].Key]) {
                                  //      console.log(formCtrl[serverValidations[prop].Key]);
                                  formCtrl[serverValidations[prop].Key].$setValidity(serverValidations[prop].Key, false);
                                  formCtrl[serverValidations[prop].Key].$errorText = serverValidations[prop].Value;

                                  toggleClasses(formCtrl[serverValidations[prop].Key].$invalid);
                              }

                              if (!formCtrl.hasOwnProperty(serverValidations[prop].Key)) {
                                  //we've detected a field which doesn't relate to a form field,
                                  //lets display it as a main error!
                                  mainErrors.push(serverValidations[prop].Value);
                              }

                          }
                      };

                      if (mainErrors.length > 0) {

                          scope.main_errors = { invalid: true, errors: mainErrors };
                          scope.$apply();
                      }
                     
                  }, 0, false);

              });
              scope.$on('show-errors-check-validity', function () {
                  return toggleClasses(formCtrl[inputName].$invalid);
              });
              scope.$on('show-errors-reset', function (event, args) {

                  return $timeout(function () {
                      el.removeClass('has-error');
                      el.removeClass('has-success');


                      if (previousErrors != null) {
                          var prop;
                          for (prop in previousErrors) {
                              if (previousErrors.hasOwnProperty(prop)) {
                                  if (formCtrl[previousErrors[prop].Key]) {
                                      formCtrl[previousErrors[prop].Key].$setValidity(previousErrors[prop].Key, true);
                                  }
                              }
                          }
                          // reset validation's state
                          formCtrl.$setPristine();
                          formCtrl.$setUntouched();
                          formCtrl.$setValidity();
                          previousErrors = null;

                          //we have to call apply else the fields are still show as invalid on the form.
                          //info here on apply: http://jimhoskins.com/2012/12/17/angularjs-and-apply.html
                          scope.$apply();
                      }

                      return blurred = false;

                  }, 0, false);
              });
              return toggleClasses = function (invalid) {
                  el.toggleClass('has-error', invalid);
                  if (showSuccess) {
                      return el.toggleClass('has-success', !invalid);
                  }
              };
          };
          return {
              restrict: 'A',
              require: '^form',
              compile: function (elem, attrs) {
                  if (attrs['showErrors'].indexOf('skipFormGroupCheck') === -1) {
                      if (!(elem.hasClass('form-group') || elem.hasClass('input-group'))) {
                          throw "show-errors element does not have the 'form-group' or 'input-group' class";
                      }
                  }
                  return linkFn;
              }
          };
      }
    ]);

    showErrorsModule.provider('showErrorsConfig', function () {
        var _showSuccess, _trigger;
        _showSuccess = false;
        _trigger = 'blur';
        this.showSuccess = function (showSuccess) {
            return _showSuccess = showSuccess;
        };
        this.trigger = function (trigger) {
            return _trigger = trigger;
        };
        this.$get = function () {
            return {
                showSuccess: _showSuccess,
                trigger: _trigger
            };
        };
    });

    showErrorsModule.factory('fieldValInterceptor', function ($q, $rootScope) {
        return {
            response: function (response) {
                if (response.headers()['content-type'] === "application/json; charset=utf-8") {
                    var data = response.data;

                    if (!data)
                        return $q.reject(response);

                    if (data.ErrorFields && data.ErrorFields.length > 0) {

                        $rootScope.$broadcast("_ERROR_FIELDS_", { ErrorFields: data.ErrorFields });
                    }

                    /*  if (data.Errors && data.Errors.length > 0) {
                          var mainErrors = [];
  
                      
                          if (mainErrors.length > 0) {
                              $rootScope.$broadcast("_ERRORS_", { Errors: mainErrors });
                          }
                      }*/
                }
                return response;
            },
            responseError: function (response) {
                return $q.reject(response);
            }
        };
    });
}).call(this);