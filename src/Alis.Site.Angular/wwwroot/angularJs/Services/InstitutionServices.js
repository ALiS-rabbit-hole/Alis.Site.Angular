angular.module('institutionServices', [])
    .factory('$institutionServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Institutions/";

    return {
        getAll: function () {
            return $http.get(serviceRoot + "GetAll").then(function (result) {
                return result.data;
            });
        },
        get: function(id) {
            return $http.get(serviceRoot + "Get/", { params: { Id: id } }).then(function(result) {
                return result.data;
            });
        },
        update: function (institution) {

            return $http.put(serviceRoot + "Update/", institution).then(function (result) {
                return result.data;
            });
        },
        create: function (institution) {
            return $http.post(serviceRoot + "Create/", institution).then(function (result) {
                return result.data;
            });
        },
        remove: function (institution) {
            return $http.delete(serviceRoot + "Delete/", { params: { ID: institution.ID } }).then(function (result) {
                return result.data;
            });
        }
    };
});
