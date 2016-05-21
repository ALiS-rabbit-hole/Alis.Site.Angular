angular.module('userServices', [])
    .factory('$userServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Users/";

    return {
        getAllUsers: function () {
            return $http.get(serviceRoot + "GetAll").then(function (result) {
                return result.data;
            });
        }
    };
});
