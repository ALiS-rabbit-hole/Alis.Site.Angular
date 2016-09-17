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
            return $http.get(serviceRoot + "TokenisValid", {Token: token}).then(function(result) {
                return result.data;
            });
        }
    };
});
