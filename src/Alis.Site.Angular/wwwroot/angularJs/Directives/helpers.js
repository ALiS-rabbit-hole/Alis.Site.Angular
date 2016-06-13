(function() {
    var mod = angular.module("helpers",[]);

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

    mod.directive('popover', function() {
        return function(scope, elem) {
            elem.popover();
        }
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

    mod.controller("successMessageController", function ($scope) {
    
        $scope.notifications = {};
        $scope.notifications.success = {};
    });
}());