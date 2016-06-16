(function () {
    var showErrorsModule = angular.module('ui.bootstrap.showErrors', []);

    showErrorsModule.config(function ($httpProvider) {
        $httpProvider.interceptors.push('fieldValInterceptor');
    });
    /*
    showErrorsModule.directive('showErrorsNoForm', [''], function () {

        var link = function (scope, el, attrs, formCtrl) {
            scope.$on('_ERROR_FIELDS_', function (event, args) {
                $timeout(function () {
                    console.log("kdsjlkfds");
                    var prop;
                    var mainErrors = [];

                    for (prop in args.ErrorFields) {

                            mainErrors.push(args.ErrorFields[prop]);

                    };

                    if (mainErrors.length > 0) {
                        scope.notifications = {};
                        scope.notifications.errors = { invalid: true, descriptions: mainErrors };

                    }
                    scope.$apply();
                }, 0, false);

            });
        };

        return {
            restrict: 'A',
            compile: function (elem, attrs) {
                return link;
            }
        };


    });*/


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
                  $timeout(function () {
                   
                      //we flag up fields as invalid and add the message against as returned by the server
                      previousErrors = args.ErrorFields;
                      var prop;
                      var mainErrors = [];
                      scope.notifications = {};
                      scope.notifications.success = { valid: false };

                 
                         
                          if (args.ErrorFields[inputName] != null && formCtrl[inputName]) {
                             
                              formCtrl[inputName].$setValidity(inputName, false);
                              formCtrl[inputName].$errorText = args.ErrorFields[inputName];

                              toggleClasses(formCtrl[inputName].$invalid);
       
                          }

                          for (prop in args.ErrorFields) {
                          if (!formCtrl[prop]) {
                                  //we've detected a field which doesn't relate to a form field,
                                  //lets display it as a main error!
                                  mainErrors.push(args.ErrorFields[prop]);

                                  //console.log(serverValidations[prop].Key);
                              }

                            
                      };

                      if (mainErrors.length > 0) {
                          scope.notifications = {};
                          scope.notifications.errors = { invalid: true, descriptions: mainErrors };
                        
                      }
                       scope.$apply();
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
                          
                                  if (formCtrl[prop]) {
                                      formCtrl[prop].$setValidity(prop, true);
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

                        var errors = [];
                        for (item in data.ErrorFields) {

                            console.log(item);
                            errors[data.ErrorFields[item].Key] = data.ErrorFields[item].Value;
                        };

                        $rootScope.$broadcast("_ERROR_FIELDS_", { ErrorFields: errors });
                    }
                }
                return response;
            },
            responseError: function (response) {
                return $q.reject(response);
            }
        };
    });
})();