//http://stackoverflow.com/questions/18512434/multiple-module-in-angularjs


var singleApp = angular.module('singleApp', ['ncy-angular-breadcrumb', 'templatescache', 'ui.router', 'rolesApp', 'usersApp', 'institutionsApp'])
    .config(function ($breadcrumbProvider) {
        $breadcrumbProvider.setOptions({
            prefixStateName: 'users'
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
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
                    templateUrl: "angularJs/Apps/Users/Templates/home.html",
                    ncyBreadcrumb: { label: "Users Home" }
                })
                .state('users.edit', {
                    url: "/users/edit/:id",
                    controller: 'UsersEditController',
                    controllerAs: "vm",
                    templateUrl: "angularJs/Apps/Users/Templates/edit.html",
                    ncyBreadcrumb: { label: "Edit User", parent: 'users.home' }
                })
                .state('users.create', {
                    url: "/users/create",
                    controller: 'UsersCreateController',
                    controllerAs: "vm",
                    templateUrl: "angularJs/Apps/Users/Templates/create.html",
                    ncyBreadcrumb: { label: "Create User", parent: 'users.home' }
                })
            .state('roles', {
                abstract: true,
                template: '<div ui-view></div>'
            })
                .state('roles.home', {
                    url: "/roles",
                    controller: 'RolesHomeController',
                    controllerAs: "vm",
                    templateUrl: "angularJs/Apps/Roles/Templates/home.html",
                    ncyBreadcrumb: { label: "Roles Home" }
                })
                .state('roles.edit', {
                    url: "/roles/edit/:id",
                    controller: 'RolesEditController',
                    controllerAs: "vm",
                    templateUrl: "angularJs/Apps/Roles/Templates/edit.html",
                    ncyBreadcrumb: { label: "Edit Role", parent: 'roles.home' }
                })
                .state('roles.create', {
                    url: "/roles/create",
                    controller: 'RolesCreateController',
                    controllerAs: "vm",
                    templateUrl: "angularJs/Apps/Roles/Templates/create.html",
                    ncyBreadcrumb: { label: "Create Role", parent: 'roles.home' }
                })
            .state('institutions', {
                        abstract: true,
                        template: '<div ui-view></div>'
                    })
                .state('institutions.home', {
                    url: "/institutions",
                    controller: 'InstitutionsHomeController',
                    controllerAs: "vm",
                    templateUrl: "angularJs/Apps/Institutions/Templates/home.html",
                    ncyBreadcrumb: { label: "Institutions Home" }
                })
                .state('institutions.edit', {
                    url: "/institutions/edit/:id",
                    controller: 'InstitutionsEditController',
                    controllerAs: "vm",
                    templateUrl: "angularJs/Apps/Institutions/Templates/edit.html",
                    ncyBreadcrumb: { label: "Edit Institution", parent: 'institutions.home' }
                })
                .state('institutions.create', {
                    url: "/institutions/create",
                    controller: 'InstitutionsCreateController',
                    controllerAs: "vm",
                    templateUrl: "angularJs/Apps/Institutions/Templates/create.html",
                    ncyBreadcrumb: { label: "Create Institution", parent: 'institutions.home' }
                });
});