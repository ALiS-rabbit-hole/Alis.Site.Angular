var configurationApp = angular.module('configurationApp', ['searchServices', 'helpers', 'ui.bootstrap', 'ui.bootstrap.showErrors']);

configurationApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    $sceProvider.enabled(false);

    $stateProvider.state('configuration',
        {
            abstract: true,
            template: '<div ui-view></div>',
            ncyBreadcrumb: { label: "Configuration", parent: 'users.home' }
        })
        .state('configuration.home',
        {
            url: "/configuration",
            controller: 'ConfigurationHomeController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Configuration/Templates/home.html",
            ncyBreadcrumb: { label: "Login" },
            authenticate: true
        });
});

configurationApp.controller("ConfigurationHomeController", function ($searchServices) {
    var vm = this;

    var objs = new Array();
    $searchServices.getSearchable().then(function (data) {
        angular.forEach(data.Results, function (value, key) {
            objs.push({ Name: value, Checked: false });
        });

        vm.searchable = objs;
        console.log(vm.searchable);
    });

   /* $searchServices.getSearchStatistics().then(function (data) {
        $scope.numberOfRecords = data.Result;
    });*/

    /*$scope.deleteSearchRecords = function () {
        $siteServices.deleteAllSearchDocuments().then(function () {
            $siteServices.getSearchStatistics().then(function (data) {
                $scope.numberOfRecords = data.Result;
            });
        });
    };*/

    vm.doReindex = function () {

        var anyToIndex = false;

        angular.forEach(vm.searchable, function (value, key) {
            value.Success = false;
        });

        var itemsToIndex = [];

        angular.forEach(vm.searchable, function (value, key) {
            if (!anyToIndex && value.Checked)
                anyToIndex = true;
        });

        if (anyToIndex) {

        }


        angular.forEach(vm.searchable, function (value, key) {
            console.log(value);
            if (value.Checked) {
                itemsToIndex.push(value.Name);

            }


        });

        if (itemsToIndex.length > 0) {
            $searchServices.reindexSearchDocuments(itemsToIndex).then(function(data) {

                value.Success = data.Success;
                vm.disableButton = false;

                /*  $searchServices.getSearchStatistics().then(function (data) {
                      $scope.numberOfRecords = data.Result;
                  });*/
            });
        };
    };
});
