(function() {
    var mod = angular.module("helpers", ['ui.bootstrap']);

    mod.directive(
        "addressForm", function() {
            return ({
                restrict: "E",
                templateUrl: "angularJs/Templates/_addressForm.html"
            });
        });
    mod.directive(
    "notificationForm", ['$state', function ($state) {
        return ({
            restrict: "E",
            templateUrl: "angularJs/Templates/_notificationForm.html",
            link: function (scope, element, attrs) {
                console.log($state.href(attrs.backRoute));
                scope.back = $state.href(attrs.backRoute);
            }
        });
    }]);
    mod.directive(
        "notifications",  function() {
            return ({
                restrict: "E",
                controller: "successMessageController",
                templateUrl: "angularJs/Templates/_notifications.html"
            });
        });



    mod.directive(
        "angularAppMenu", function () {
            console.log("InMenu");
            return ({
                restrict: "E",
                controller: "angularAppMenuController",
                templateUrl: "angularJs/Templates/_angularAppMenu.html"
            });
        });
    mod.controller("angularAppMenuController", function (Session, $scope, AUTH_EVENTS) {
        var vm = this;

        $scope.visible = Session.isAuthenticated();

        $scope.$on(AUTH_EVENTS.loginSuccess, function () {
       
            $scope.visible = true;



        });

    });
    mod.directive(
    "pageInfo", function () {
        return ({
            restrict: "E",
            scope: {},
            template: "<h1 class=\"page-title pull-left\">{{info}}</h1>",
            controller: "pageInfoController"

        });
    });

    mod.controller("pageInfoController", function ($scope, $timeout) {
        var vm = this;

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log("here");

                $scope.info = toState.ncyBreadcrumbLabel;
        });

    });

    mod.directive(
    "userList", function () {
        return ({
            restrict: "E",
            controller: "userListController",
            templateUrl: "angularJs/Templates/_userList.html",
            scope: {
                selectedUsers: "="
            }//,
          /*  link: function (scope, element, attrs) {
                console.log(attrs.selectedUsers);
                if (!!attrs.selectedUsers) {
                    scope.selectedUsers = attrs.selectedUsers;
                } else {
                    scope.selectedUsers = [];
                }*/
           // }
        });
    });


    mod.controller("userListController", function ($scope, $userServices) {

        $userServices.getQueryItem($scope.query).then(function (data) {

            $scope.query = data.Results;
          
            $userServices.getWithQuery($scope.query).then(function (data) {
         
                $scope.users = data.Results;
            }).catch(function (error) {
                console.log(error);
            });


        }).catch(function (error) {
            console.log(error);
        });

        $scope.pageChanged = function () {
            $userServices.getWithQuery($scope.query).then(function (data) {
                $scope.users = data.Results;
            }).catch(function (error) {
                console.log(error);
            });
        };

        $scope.reorder = function (column) {

            if (column === $scope.query.OrderBy) {
                $scope.query.Direction === "Asc" ? $scope.query.Direction = "Desc" : $scope.query.Direction = "Asc";
            } else {
                $scope.query.Direction = "Asc";
                $scope.query.OrderBy = column;
            }

            $userServices.getWithQuery($scope.query).then(function (data) {
                $scope.users = data.Results;
            }).catch(function (error) {
                console.log(error);
            });
        };      

        $scope.pushUser = function(user) {
            $scope.selectedUsers.push(user);

            console.log($scope.selectedUsers);
        };

        $scope.getGlyphClass = function (column) {

            //<span ng-class="{'glyphicon glyphicon-triangle-bottom': vm.query.OrderBy!='username', 'glyphicon-triangle-top': vm.query.OrderBy==='username' && vm.query.Direction === 'Desc', 'glyphicon-triangle-bottom': vm.query.OrderBy==='username' && vm.query.Direction === 'Asc'}" aria-hidden="true"></span></a></th>
            if ($scope.query === undefined || column !== $scope.query.OrderBy)
                return "glyphicon glyphicon-triangle-bottom";

            if (column === $scope.query.OrderBy && $scope.query.Direction === "Desc")
                return "glyphicon glyphicon-triangle-top";
            else
                return "glyphicon glyphicon-triangle-bottom";
        };

    });




    mod.directive(
    "institutionForm", ['$state', function ($state) {
        return ({
            restrict: "E",
            controller: "successMessageController",
            templateUrl: "angularJs/Templates/_institutionForm.html",
            link: function (scope, element, attrs) {

                scope.back = $state.href(attrs.backRoute);
            }
        });
    }]);

    mod.directive(
        "userForm", ['$state', function ($state) {
    return ({
        restrict: "E",
        // scope: { backRoute: '@'},
        
        
        controller: "successMessageController",
        templateUrl: "angularJs/Templates/_userForm.html",
        link: function (scope, element, attrs) {

            scope.back = $state.href(attrs.backRoute); 
        }
    });
        }]);

    mod.directive(
    "changePasswordForm", ['$state', function ($state) {
        return ({
            restrict: "E",
            controller: "successMessageController",
            templateUrl: "angularJs/Templates/_changePasswordForm.html",
            link: function (scope, element, attrs) {

                scope.back = $state.href(attrs.backRoute);
            }
        });
    }]);

    mod.directive(
    "roleForm", ['$state',function ($state) {
        return ({
            restrict: "E",
            controller: "successMessageController",

            templateUrl: "angularJs/Templates/_roleForm.html",
            link: function (scope, element, attrs) {

                scope.back = $state.href(attrs.backRoute);
            }
        });
    }]);


    mod.directive(
"groupForm", ['$state', function ($state) {
    return ({
        restrict: "E",
        controller: "successMessageController",

        templateUrl: "angularJs/Templates/_groupForm.html",
        link: function (scope, element, attrs) {

            scope.back = $state.href(attrs.backRoute);
        }
    });
}]);


    mod.directive(
"roomForm", ['$state', function ($state) {
    return ({
        restrict: "E",
        controller: "successMessageController",

        templateUrl: "angularJs/Templates/_roomForm.html",
        link: function (scope, element, attrs) {

            scope.back = $state.href(attrs.backRoute);
        }
    });
}]);


    mod.directive("paging", function () {
        return {
            restrict: 'E',
            scope: {
                queryItem: '='
            },
            templateUrl: "angularJs/Templates/_paging.html"
        };
    });

    mod.directive('ngReallyClick', ['$uibModal',
    function ($uibModal) {

        var modalInstanceCtrl = function ($scope, $uibModalInstance) {
            $scope.ok = function () {
                $uibModalInstance.close();
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        };

        return {
            restrict: 'A',
            scope: {
                ngReallyClick: "&"
            },
            link: function (scope, element, attrs) {
                element.bind('click', function () {
                    var message = attrs.ngReallyMessage || "Are you sure ?";

                    var modalHtml = '<div class="modal-body">' + message + '</div>';
                    modalHtml += '<div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button><button class="btn btn-warning" ng-click="cancel()">Cancel</button></div>';

                    var modalInstance = $uibModal.open({
                        template: modalHtml,
                        controller: modalInstanceCtrl
                    });

                    modalInstance.result.then(function () {
                        scope.ngReallyClick();
                    }, function () {
                        //Modal dismissed
                    });

                });

            }
        }
    }
    ]);



    mod.controller("successMessageController", function ($scope) {
    
        $scope.notifications = {};
        $scope.notifications.success = {};
    });

    mod.directive("markItUp", ["markitupSettings", function (markitupSettings) {
        return {
            restrict: "A",
            scope: {
                ngModel: "="
            },
            link: function (scope, element, attrs) {
                console.log(scope); console.log(element);
                var settings;
                settings = markitupSettings.create(function (event) {
                    scope.$apply(function () {
                        scope.ngModel = event.textarea.value;
                        
                    });
                });
                angular.element(element).markItUp(settings);
            }
        };
    }
    ]);

    mod.factory('markitupSettings', [
  function() {
      var factory, markset;
      markset = [
        //here goes your usual markItUp layout
      ];
      factory = {};
      factory.create = function (callback) {

          return {
              afterInsert: callback,
              previewParserPath: '',
              markupSet: markset
          };
      };
      return factory;
  }
    ]);
}());