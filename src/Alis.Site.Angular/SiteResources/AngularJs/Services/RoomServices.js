angular.module('roomServices', [])
    .factory('$roomServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Rooms/";

    return {
        getAll: function () {
            return $http.get(serviceRoot + "GetAll").then(function (result) {
                return result.data;
            });
        },
        get: function (id) {
            return $http.get(serviceRoot + "Get", { params: { Id: id } }).then(function (result) {
                return result.data;
            });
        },
        getTypes: function () {
            return $http.get(serviceRoot + "Get/Types").then(function (result) {
                return result.data;
            });
        }
    };
});
