angular.module('roleServices', [])
    .factory('$roleServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Roles/";

    return {
        getAllRoles: function () {
            return $http.get(serviceRoot + "GetAll").then(function (result) {
                return result.data;
            });
        }
    };
});
