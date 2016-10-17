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
        new: function () {
            return $http.get(serviceRoot + "Get/New").then(function (result) {
                return result.data;
            });
        },
        getTypes: function () {
            return $http.get(serviceRoot + "Get/Types").then(function (result) {
                return result.data;
            });
        },
        create: function (room) {
            return $http.post(serviceRoot + "Create", room).then(function (result) {
                return result.data;
            });
        },
        update: function (room) {
            return $http.put(serviceRoot + "Update", room).then(function (result) {
                return result.data;
            });
        },
    };
});
