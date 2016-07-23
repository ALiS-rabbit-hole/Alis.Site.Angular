angular.module('searchServices', [])
    .factory('$searchServices', function ($http) {
        var serviceRoot = config.serviceRoot + "/Search/";
        var siteServiceRoot = config.serviceRoot + "/Site/Search/";

    return {//    [Route("/Site/Search/ReindexSearchDocuments", "Post")]
        reindexSearchDocuments: function (items) {
            return $http.post(siteServiceRoot + "ReindexSearchDocuments", { ItemsToReindex: items }).then(function (result) {
                return result.data;
            });
        },
        deleteAllSearchDocuments: function () {
            return $http.post(siteServiceRoot + "DeleteAll").then(function (result) {
                return result.data;
            });
        },
        getSearchable: function () {
            return $http.get(siteServiceRoot + "Availability").then(function (result) {
                return result.data;
            });
        },
        getSearchStatistics: function () {
            return $http.get(siteServiceRoot + "Statistics").then(function (result) {
                return result.data;
            });
        }
    }
});