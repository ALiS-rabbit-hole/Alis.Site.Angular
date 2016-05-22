var usersApp = angular.module('usersApp', ['ngRoute', 'userServices']);

usersApp.config(function ($routeProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    //var dir = "http://alissitea1.azurewebsites.net/AngularJs/Apps/Users/Templates/";
    var dir = config.angularRoot + "/Apps/Users/Templates/";
    $sceProvider.enabled(false);



    $routeProvider.when('/Home', {
        controller: 'HomeController',
        controllerAs: "vm",
        templateUrl: dir + 'Home.html'
    }).otherwise({
        redirectTo: '/Home'
    });
});

usersApp.controller("HomeController", function($userServices) {
    var vm = this;

    $userServices.getAllUsers().then(function(data) {
        vm.users= data.Results;
    });
});