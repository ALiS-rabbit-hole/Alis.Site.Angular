var applicationsApp = angular.module('applicationsApp', ['ngRoute', 'applicationServices', 'ui.bootstrap.showErrors', 'helpers']);

applicationsApp.config(function ($routeProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    var dir = config.angularRoot + "/Apps/Applications/Templates/";
    $sceProvider.enabled(false);



    $routeProvider.when('/Home', {
        controller: 'HomeController as ctrl',
        controllerAs: "vm",
        templateUrl: dir + 'Home.html'
    }).when('/View', {
        controller: 'ViewController',
        controllerAs: 'vm',
        templateUrl: dir + 'View.html'
    }).otherwise({
        redirectTo: '/Home'
    });
});

applicationsApp.controller("HomeController", function ($applicationServices) {
    var vm = this;

    $applicationServices.getAll().then(function (data) {
        vm.applications = data.Results;
    });
});

applicationsApp.controller("ViewController", function ($location, $applicationServices) {
    var vm = this;

    $applicationServices.get($location.search()["id"]).then(function (data) {
        vm.application = data.Results;
    });
});