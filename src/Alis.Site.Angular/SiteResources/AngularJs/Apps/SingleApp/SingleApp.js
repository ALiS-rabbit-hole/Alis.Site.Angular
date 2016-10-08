//http://stackoverflow.com/questions/18512434/multiple-module-in-angularjs
//http://jasonwatmore.com/post/2016/04/05/AngularJS-JWT-Authentication-Example-Tutorial.aspx
//http://blog.ionic.io/angularjs-authentication/

//https://github.com/fnakstad/angular-client-side-auth/blob/master/client/js/services.js
var singleApp = angular.module('singleApp', ['ngCookies', 'ncy-angular-breadcrumb', 'templatescache', 'ui.router', 'rolesApp', 'usersApp', 'institutionsApp', 'notificationsApp', 'accountsApp', 'applicationsApp', 'configurationApp'])
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
     //   $httpProvider.defaults.withCredentials = true;
        //
        // Now set up the states

    }).run(function ($rootScope, $http, $state, $location) {
    /*    $rootScope.$on("$stateChangeStart",
            function (event, toState, toParams,
                      fromState, fromParams) {
                if (!Auth.authorize(toState.data.access)) {
                    $rootScope.error = "Access denied";
                    event.preventDefault();

                    if (fromState.url === '^') {
                        if (Auth.isLoggedIn())
                            $state.go('user.home');
                        else {
                            $rootScope.error = null;
                            $state.go('anon.login');
                        }
                    }
                }
            });*/
    });