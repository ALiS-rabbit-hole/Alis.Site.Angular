var accountsApp = angular.module('accountsApp', ['ngRoute', 'accountServices', 'ui.bootstrap.showErrors', 'ui.bootstrap', 'helpers']);

accountsApp.config(function ($routeProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    var dir = config.angularRoot + "/Apps/Accounts/Templates/";
    $sceProvider.enabled(false);



    $routeProvider.when('/Login', {
        controller: 'LoginController as ctrl',
        controllerAs: "vm",
        templateUrl: dir + 'Login.html'
    }).otherwise({
        redirectTo: '/Login'
    });
});

accountsApp.controller("LoginController", function ($accountServices) {
    var vm = this;

    $accountServices.getAll().then(function (data) {
        vm.applications = data.Results;
    });
});