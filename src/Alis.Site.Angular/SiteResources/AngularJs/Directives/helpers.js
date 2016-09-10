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
                templateUrl: "angularJs/Templates/_notifications.html",
            });
        });

    mod.directive(
    "institutionForm", ['$state', function ($state) {
        return ({
            restrict: "E",
            controller: "successMessageController",
            templateUrl: "angularJs/Templates/_institutionForm.html",
            link: function (scope, element, attrs) {

                scope.tst = function () { console.log("here!");}
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
}());