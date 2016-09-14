var accountsApp = angular.module('accountsApp', ['accountServices', 'ui.bootstrap.showErrors', 'ui.bootstrap', 'helpers']);

accountsApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    $sceProvider.enabled(false);

    $stateProvider.state('account',
        {
            abstract: true,
            template: '<div ui-view></div>',
            ncyBreadcrumb: { label: "Login", parent: 'users.home' }
        })
        .state('account.login',
        {
            url: "/account",
            controller: 'LoginController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Account/Templates/login.html",
            ncyBreadcrumb: { label: "Login" }
        })
        .state('account.forgotPassword',
        {
            url: "/account/resendPassword",
            controller: 'ForgotPasswordController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Account/Templates/forgotPassword.html",
            ncyBreadcrumb: { label: "Forgot Password", parent: 'account.login' }
        });

});

accountsApp.controller("LoginController", function () {
    var vm = this;
});

accountsApp.controller("ForgotPasswordController", function ($accountServices, $scope) {
    var vm = this;

    vm.resendPassword = function () {

        $accountServices.resendPassword(vm.email).then(function (data) {
            if (data.Success) {
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The password was successfully something."];
                //we can call this here to reset all errors and the form. if you redirect out on success, no need to call this.
                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});