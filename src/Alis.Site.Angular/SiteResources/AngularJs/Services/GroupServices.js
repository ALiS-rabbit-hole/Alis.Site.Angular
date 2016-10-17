angular.module('groupServices', [])
    .factory('$groupServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Groups/";

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
        remove: function (room) {
            return $http.delete(serviceRoot + "Delete", { params: { ID: room.ID } }).then(function (result) {
                return result.data;
            });
        }
    };
});
