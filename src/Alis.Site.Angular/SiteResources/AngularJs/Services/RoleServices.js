angular.module('roleServices', [])
    .factory('$roleServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Roles/";

    return {
        getAllRoles: function () {
            return $http.get(serviceRoot + "GetAll").then(function (result) {
                return result.data;
            });
        },
        get: function(id) {
            return $http.get(serviceRoot + "Get/", { params: { Id: id } }).then(function(result) {
                return result.data;
            });
        },
        update: function(role) {
            return $http.put(serviceRoot + "Update/", { Role: role }).then(function (result) {
                return result.data;
            });
        },
        create: function(role) {
            return $http.post(serviceRoot + "Create/", { Role: role }).then(function (result) {
                return result.data;
            });
        }
    };
});
