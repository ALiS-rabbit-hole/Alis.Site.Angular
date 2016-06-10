angular.module('eventServices', [])
    .factory('$eventServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Events/";

    return {
        get: function(id) {
            return $http.get(serviceRoot + "Get", { params: { Id: id } }).then(function(result) {
                return result.data;
            });
        }
    };
});
