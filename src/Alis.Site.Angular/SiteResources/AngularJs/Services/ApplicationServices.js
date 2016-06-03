angular.module('applicationServices', [])
    .factory('$applicationServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Applications/";

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
        }
    };
});
