angular.module('roleServices', [])
    .factory('$roleServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Roles/";

    return {
        getAll: function () {
            return $http.get(serviceRoot + "GetAll").then(function (result) {
                return result.data;
            });
        },
        get: function(id) {
            return $http.get(serviceRoot + "Get", { params: { Id: id } }).then(function(result) {
                return result.data;
            });
        },
        update: function (role) {
            return $http.put(serviceRoot + "Update",  role).then(function (result) {
                return result.data;
            });
        },
        create: function(role) {
            return $http.post(serviceRoot + "Create", role).then(function (result) {
                return result.data;
            });
        },
        remove: function(role) {
            return $http.delete(serviceRoot + "Delete", { params: { ID: role.ID } }).then(function(result) {
                return result.data;
            });
        }
    };
});
