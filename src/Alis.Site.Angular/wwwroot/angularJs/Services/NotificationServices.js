angular.module('notificationServices', [])
    .factory('$notificationServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Notifications/";

    return {
        get: function(id) {
            return $http.get(serviceRoot + "Get", { params: { Id: id } }).then(function(result) {
                return result.data;
            });
        },
        create: function (notification) {
            //console.log(notification);
            return $http.post(serviceRoot + "Create", notification).then(function (result) {
                return result.data;
            });
        }
    };
});
