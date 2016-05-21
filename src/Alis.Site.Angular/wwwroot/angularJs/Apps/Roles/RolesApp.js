var rolesApp = angular.module('rolesApp', ['ngRoute', 'roleServices']);

rolesApp.config(function ($routeProvider, $sceProvider) {

    var dir = config.angularRoot + "/Apps/Roles/Templates/";
    $sceProvider.enabled(false);



    $routeProvider.when('/Home', {
        controller: 'HomeController',
        templateUrl: dir + 'Home.html'
    }).otherwise({
        redirectTo: '/Home'
    });
});

rolesApp.controller("HomeController", function ($scope, $roleServices) {

    $roleServices.getAllRoles().then(function(data) {
        $scope.roles= data.Results;
    });
});