var accountsApp = angular.module('accountsApp', ['accountServices', 'ui.bootstrap.showErrors', 'ui.bootstrap', 'helpers']);
//http://jasonwatmore.com/post/2016/04/05/angularjs-jwt-authentication-example-tutorial
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
        }).state('account.resetPassword',
        {
            url: "/account/resetPassword/:token",
            controller: 'ResetPasswordController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Account/Templates/resetPassword.html",
            ncyBreadcrumb: { label: "Reset Password", parent: 'account.login' }
        }).state('account.logout',
        {
            url: "/account/resetPassword/:token",
            controller: 'LogoutController',
            controllerAs: "vm",
            ncyBreadcrumb: { label: "Reset Password", parent: 'account.login' }
        });

});

accountsApp.controller("LoginController", function ($accountServices) {
    var vm = this;

    vm.login = function() {
        $accountServices.authenticate({ username: "chris.withers@gmail.com", password: "22bullseye22" }).then(function(result) {
        });
    }
});


accountsApp.controller("LogoutController", function ($http, $localStorage) {
    var vm = this;
    // remove user from local storage and clear http auth header
    delete $localStorage.currentUser;
    $http.defaults.headers.common.Authorization = '';
});


accountsApp.controller("ForgotPasswordController", function ($accountServices, $scope) {
    var vm = this;



    vm.resendPassword = function () {
        $scope.$broadcast('show-errors-reset');
        $accountServices.resendPassword(vm.email).then(function (data) {
            if (data.Success) {
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The password was successfully something."];
                //we can call this here to reset all errors and the form. if you redirect out on success, no need to call this.
           
            }
        });
    };
});

accountsApp.controller("ResetPasswordController", function ($accountServices, $scope, $stateParams) {
    var vm = this;

    $accountServices.tokenIsValid($stateParams.token).then(function (data) {

        vm.validToken = data.Success;

        vm.ChangePasswordWithToken = {};
        vm.ChangePasswordWithToken.Token = $stateParams.token;

    });

    vm.Save = function ()
    {
        $scope.$broadcast('show-errors-reset');
        $accountServices.changePassword(vm.ChangePasswordWithToken).then(function (data) {
        
            if (data.Success) {
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["Your password was successfully changed"];
                //we can call this here to reset all errors and the form. if you redirect out on success, no need to call this.
                $scope.$broadcast('show-errors-reset');//need here too??
            }
        });
    }
});