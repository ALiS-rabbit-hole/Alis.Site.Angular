//https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec#.o7pey3wuu

angular.module('authenticationService', [])
    .factory('$authenticationService', function ($http, Session) {
    return {
        login: function(credentials) {
            return $http.post(config.serviceRoot + "/authenticate", credentials).then(function (result) {
                console.log(result);

                Session.create(result.data.SessionId, result.data.UserId,
                       null);

                console.log(Session);
                return result.data;
            });
        },
        isAuthenticated: function() {
            return !!Session.userId;
        },
        logout: function() {
            Session.destroy();
        }
    };
    });
