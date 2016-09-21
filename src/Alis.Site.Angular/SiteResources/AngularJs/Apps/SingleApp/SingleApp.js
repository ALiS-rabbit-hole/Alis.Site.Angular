//http://stackoverflow.com/questions/18512434/multiple-module-in-angularjs
//http://jasonwatmore.com/post/2016/04/05/AngularJS-JWT-Authentication-Example-Tutorial.aspx
//http://blog.ionic.io/angularjs-authentication/
var singleApp = angular.module('singleApp', ['ngCookies','ncy-angular-breadcrumb', 'templatescache', 'ui.router', 'rolesApp', 'usersApp', 'institutionsApp', 'notificationsApp', 'accountsApp', 'applicationsApp'])
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

});