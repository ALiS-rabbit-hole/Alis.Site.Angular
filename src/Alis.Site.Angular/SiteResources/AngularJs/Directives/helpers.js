(function() {
    var mod = angular.module("helpers", ['ui.bootstrap']);

    /*   mod.controller("successMessageController", function($scope) {
        var vm = this;
        $scope.$on('_success_', function(event, args) {
            vm.success = true;
            vm.success.messages = args.messages;
        });
    });
  mod.directive(
        "mainErrors", function() {
            return ({
                restrict: "E",
                templateUrl: "angularJs/Templates/_generalErrors.html"
            });
        });*/

    mod.directive(
        "addressForm", function() {
            return ({
                restrict: "E",
                templateUrl: "angularJs/Templates/_addressForm.html"
            });
        });
    mod.directive(
    "notificationForm", function () {
        return ({
            restrict: "E",
            templateUrl: "angularJs/Templates/_notificationForm.html"
        });
    });
   /* mod.directive(
        "successMessages", function() {
            return ({
                restrict: "E",
                controllerAs: "vm",
                controller: "successMessageController",
                templateUrl: "angularJs/Templates/_successMessages.html"
            });
        });*/
    mod.directive(
        "notifications", function() {
            return ({
                restrict: "E",
                require: '^form',
                controller: "successMessageController",
                scope: false,
                templateUrl: "angularJs/Templates/_notifications.html"
            });
        });

    mod.directive(
    "institutionForm", function () {
        return ({
            restrict: "E",
            require: '^form',
            controller: "successMessageController",
            scope: false,
            templateUrl: "angularJs/Templates/_institutionForm.html"
        });
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

    mod.directive(
        "userForm", function () {
    return ({
        restrict: "E",
        require: '^form',
        controller: "successMessageController",
        scope: false,
        templateUrl: "angularJs/Templates/_userForm.html"
    });
        });

    mod.directive(
    "roleForm", function () {
        return ({
            restrict: "E",
            require: '^form',
            controller: "successMessageController",
            scope: false,
            templateUrl: "angularJs/Templates/_roleForm.html"
        });
    });

    mod.controller("successMessageController", function ($scope) {
    
        $scope.notifications = {};
        $scope.notifications.success = {};
    });
}());