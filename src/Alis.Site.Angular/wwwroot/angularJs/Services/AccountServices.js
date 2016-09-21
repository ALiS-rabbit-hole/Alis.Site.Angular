angular.module('accountServices', [])
    .factory('$accountServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Account/";

    return {
        resendPassword: function (email) {
            return $http.post(serviceRoot + "ResendPassword", { Email: email }).then(function (result) {
                return result.data;
            });
        },
        tokenIsValid: function(token) {
            return $http.post(serviceRoot + "ChangePassword/Token", { Token: token }).then(function (result) {
                return result.data;
            });
        },
        changePassword: function (changePassword) {
            return $http.post(serviceRoot + "ChangePassword", changePassword).then(function (result) {
                return result.data;
            });
        },
        authenticate: function(credentials) {
            return $http.post(config.serviceRoot + "/authenticate", credentials).then(function (result) {
                console.log(result);
                return result.data;
             /*   console.log(result);
                return $http.post(config.serviceRoot + "/session-to-token", result.data.sessionId ).then(function (result1) {
                    console.log(result1);
                    return result;*/


               // });
            });
        }
    };
});
