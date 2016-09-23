//http://stackoverflow.com/questions/18512434/multiple-module-in-angularjs
//http://jasonwatmore.com/post/2016/04/05/AngularJS-JWT-Authentication-Example-Tutorial.aspx
//http://blog.ionic.io/angularjs-authentication/
var singleApp = angular.module('singleApp', ['ngCookies','ncy-angular-breadcrumb', 'templatescache', 'ui.router', 'rolesApp', 'usersApp', 'institutionsApp', 'notificationsApp', 'accountsApp', 'applicationsApp'])
    .config(function ($breadcrumbProvider, $stateProvider, $urlRouterProvider, $cookiesProvider, $httpProvider) {
        $cookiesProvider.defaults.path = '/';
        $httpProvider.defaults.withCredentials = true;
        $breadcrumbProvider.setOptions({
            prefixStateName: 'users'
        });
        //http://stackoverflow.com/questions/27307914/angular-error-running-karma-tests-html5-mode-requires-a-base-tag
       /* $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("users");
       // $httpProvider.defaults.withCredentials = true;
        //
        // Now set up the states

    })/*.run(function ($rootScope, $http, $state, $location, $localStorage) {
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = [$state.href('account.login')];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path($state.href('account.login'));
            }
        });
    })*/;