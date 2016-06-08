angular.module('notificationServices', [])
    .factory('$notificationServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Notifications/";

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
        }
    };
});
