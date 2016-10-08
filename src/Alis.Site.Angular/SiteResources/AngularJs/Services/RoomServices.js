angular.module('roomServices', [])
    .factory('$roomServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Rooms/";

    return {
        getAll: function () {
            return $http.get(serviceRoot + "GetAll").then(function (result) {
                return result.data;
            });
        }
    };
});
