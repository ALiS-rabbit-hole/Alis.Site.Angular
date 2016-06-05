angular.module('userServices', [])
    .factory('$userServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Users/";

    return {
        getAll: function () {
            return $http.get(serviceRoot + "GetAll").then(function (result) {
                return result.data;
            });
        },
        get: function (id) {
            return $http.get(serviceRoot + "Get/", { params: { Id: id } }).then(function (result) {
                return result.data;
            });
        },
        update: function (user) {
            return $http.put(serviceRoot + "Update/", user).then(function (result) {
                return result.data;
            });
        },
    };
});
