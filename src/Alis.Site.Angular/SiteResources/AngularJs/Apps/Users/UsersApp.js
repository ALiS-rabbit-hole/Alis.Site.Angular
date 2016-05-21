var usersApp = angular.module('usersApp', ['ngRoute', 'userServices']);

usersApp.config(function ($routeProvider, $sceProvider) {


    //var dir = "http://alissitea1.azurewebsites.net/AngularJs/Apps/Users/Templates/";
    var dir = config.angularRoot + "/Apps/Users/Templates/";
    $sceProvider.enabled(false);



    $routeProvider.when('/Home', {
        controller: 'HomeController',
        templateUrl: dir + 'Home.html'
    }).otherwise({
        redirectTo: '/Home'
    });
});

usersApp.controller("HomeController", function($scope, $userServices) {

    $userServices.getAllUsers().then(function(data) {
        $scope.users= data.Results;
    });
});