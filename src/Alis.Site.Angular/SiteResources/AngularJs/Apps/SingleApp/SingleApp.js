//http://stackoverflow.com/questions/18512434/multiple-module-in-angularjs


var singleApp = angular.module('singleApp', ['templatescache', 'ui.router', 'rolesApp', 'usersApp']);

singleApp.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("users");
    //
    // Now set up the states
    $stateProvider
        .state('users', {
            abstract: true,
            template: '<div ui-view></div>'
        })
            .state('users.home', {
                url: "/users",
                controller: 'UsersHomeController',
                controllerAs: "vm",
                templateUrl: "angularJs/Apps/Users/Templates/home.html"
            })
            .state('users.edit', {
                url: "/edit/:id",
                controller: 'UsersEditController',
                controllerAs: "vm",
                templateUrl: "angularJs/Apps/Users/Templates/edit.html"
            })
            .state('users.create', {
                url: "/create",
                controller: 'UsersCreateController',
                controllerAs: "vm",
                templateUrl: "angularJs/Apps/Users/Templates/create.html"
            })
        .state('roles', {
            abstract: true,
            template: '<div ui-view></div>'
        })
            .state('roles.home', {
                url: "/roles",
                controller: 'RolesHomeController',
                controllerAs: "vm",
                templateUrl: "angularJs/Apps/Roles/Templates/home.html"
            })
            .state('roles.edit', {
                url: "/edit:id",
                controller: 'RolesEditController',
                controllerAs: "vm",
                templateUrl: "angularJs/Apps/Roles/Templates/edit.html"
            })
            .state('roles.create', {
                url: "/create",
                controller: 'RolesCreateController',
                controllerAs: "vm",
                templateUrl: "angularJs/Apps/Roles/Templates/create.html"
            });
});