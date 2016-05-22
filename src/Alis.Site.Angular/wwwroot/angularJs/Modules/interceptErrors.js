angular.module('interceptErrors', [])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('fieldValInterceptor');
    }).factory('fieldValInterceptor', function ($q, $rootScope) {
        return {
            response: function (response) {
                if (response.headers()['content-type'] === "application/json; charset=utf-8") {
                    var data = response.data;

                    if (!data)
                        return $q.reject(response);

                    if (data.Fields && data.Fields.length > 0) {
                        var map = {};
                        for (var i = 0, l = data.Fields.length; i < l; i++) {
                            map[data.Fields[i].Key] = data.Fields[i].Value;
                        }

                        $rootScope.$broadcast("_ERROR_FIELDS_", { Fields: map });
                    }

                }
                return response;
            },
            responseError: function (response) {
                return $q.reject(response);
            }
        };
    });