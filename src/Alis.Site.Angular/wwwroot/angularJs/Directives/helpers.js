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