//http://stackoverflow.com/questions/18512434/multiple-module-in-angularjs
//http://jasonwatmore.com/post/2016/04/05/AngularJS-JWT-Authentication-Example-Tutorial.aspx
//http://blog.ionic.io/angularjs-authentication/


//https://github.com/fnakstad/angular-client-side-auth/blob/master/client/js/services.js
var singleApp = angular.module('singleApp', ['ngCookies', 'ncy-angular-breadcrumb', 'templatescache', 'ui.router', 'rolesApp', 'usersApp', 'roomsApp','institutionsApp', 'groupsApp', 'notificationsApp', 'accountsApp', 'applicationsApp', 'configurationApp'])
    .config(function ($breadcrumbProvider, $stateProvider, $urlRouterProvider, $cookiesProvider, $httpProvider) {
     

        $httpProvider.defaults.withCredentials = true;
      //  $http.defaults.headers.common['X-Auth-Token'] = Session.id;//$cookiesProvider['AUTH-TOKEN'];
        $cookiesProvider.defaults.path = '/';

        $breadcrumbProvider.setOptions({
            prefixStateName: 'users'
        });

        $urlRouterProvider.otherwise("account");

     //   alert($httpProvider.defaults.withCredentials);

    }).constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    }).service('Session', function () {
        this.create = function (sessionId, userId, userRole) {
            this.id = sessionId;
            this.userId = userId;
            this.userRole = userRole;
        };
        this.destroy = function () {
            this.id = null;
            this.userId = null;
            this.userRole = null;
        };

        this.isAuthenticated = function () {

            return this.id != null && this.userId != null; //!!this.userId;
        }
    }).run(function ($rootScope, $http, $state, Session) {

        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {

          //  alert(Session.isAuthenticated());

            $state.current = toState;

            if (toState.openOnly && Session.isAuthenticated()) {
                $state.go("users.home");
                event.preventDefault();
            }

            if (toState.authenticate && !Session.isAuthenticated()) {
                // User isn’t authenticated
                $state.go("account.login");
                event.preventDefault();
            }
        });
    });