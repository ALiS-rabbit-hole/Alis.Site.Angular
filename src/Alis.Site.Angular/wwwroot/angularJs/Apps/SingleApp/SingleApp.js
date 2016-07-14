//http://stackoverflow.com/questions/18512434/multiple-module-in-angularjs


var singleApp = angular.module('singleApp', ['ui.router','rolesApp', 'usersApp']);

singleApp.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("users");
    //
    // Now set up the states
    $stateProvider
        .state('users', {
            url: "/users",
            controller: 'UsersHomeController',
            controllerAs: "vm",
            templateUrl: config.angularRoot + "/Apps/Users/Templates/home.html"
        })
        .state('users.edit', {
            url: "/edit/:id",
            controller: 'UsersEditController',
            controllerAs: "vm",
            templateUrl: config.angularRoot + "/Apps/Users/Templates/edit.html"
        })
        .state('users.create', {
            url: "/create",
            controller: 'UsersCreateController',
            controllerAs: "vm",
            templateUrl: config.angularRoot + "/Apps/Users/Templates/create.html"
        })
    .state('roles', {
        url: "/roles",
        controller: 'RolesHomeController',
        controllerAs: "vm",
        templateUrl: config.angularRoot + "/Apps/Roles/Templates/home.html"
    });
});