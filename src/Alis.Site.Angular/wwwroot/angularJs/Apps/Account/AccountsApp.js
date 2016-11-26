var accountsApp = angular.module('accountsApp', ['accountServices', 'authenticationService', 'ui.bootstrap.showErrors', 'ui.bootstrap', 'helpers']);
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
            ncyBreadcrumb: { label: "Login" },
            resolve: {
                currentState: function($state) {
                    return $state.current;
                }
            }

        })
        .state('account.logout',
        {
            url: "/account/logout",
            controller: 'LogoutController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Account/Templates/logout.html",
            ncyBreadcrumb: { label: "Login" },
            openOnly: true
        })
        .state('account.forgotPassword',
        {
            url: "/account/resendPassword",
            controller: 'ForgotPasswordController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Account/Templates/forgotPassword.html",
            ncyBreadcrumb: { label: "Forgot Password", parent: 'account.login' },
            openOnly: true
        }).state('account.resetPassword',
        {
            url: "/account/resetPassword/:token",
            controller: 'ResetPasswordController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Account/Templates/resetPassword.html",
            ncyBreadcrumb: { label: "Reset Password", parent: 'account.login' },
            openOnly: true
        }).state('account.whatisthis',
        {
            url: "/account/resetPassword/:token",
            controller: 'LogoutController',
            controllerAs: "vm",
            ncyBreadcrumb: { label: "Reset Password", parent: 'account.login' },
            openOnly: true
        });

});
//http://jasonwatmore.com/post/2016/04/05/angularjs-jwt-authentication-example-tutorial
accountsApp.controller("LoginController", function ($authenticationService, $rootScope, AUTH_EVENTS) {
    var vm = this;


    vm.loginDetails = {};

    vm.login = function () {
        console.log(vm.loginDetails);
        $authenticationService.login({ username: vm.loginDetails.username, password: vm.loginDetails.password }).then(function (result) {

            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            // $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    }
});


accountsApp.controller("LogoutController", function ($http) {
    var vm = this;
    // remove user from local storage and clear http auth header
  //  delete $localStorage.currentUser;
  //  $http.defaults.headers.common.Authorization = '';
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