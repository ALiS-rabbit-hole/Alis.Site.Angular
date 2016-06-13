var institutionsApp = angular.module('institutionsApp', ['ngRoute', 'institutionServices', 'ui.bootstrap.showErrors', 'helpers']);

institutionsApp.config(function ($routeProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    var dir = config.angularRoot + "/Apps/Institutions/Templates/";
    $sceProvider.enabled(false);



    $routeProvider.when('/Home', {
        controller: 'HomeController as ctrl',
        controllerAs: "vm",
        templateUrl: dir + 'Home.html'
    }).when('/Edit', {
        controller: 'EditController',
        controllerAs: 'vm',
        templateUrl: dir + 'Edit.html'
    }).when('/Create', {
        controller: 'CreateController',
        controllerAs: 'vm',
        templateUrl: dir + 'Create.html'
    }).otherwise({
        redirectTo: '/Home'
    });
});

institutionsApp.controller("HomeController", function ($institutionServices) {
    var vm = this;

    $institutionServices.getAll().then(function (data) {
        vm.institutions = data.Results;
    });

    vm.delete = function(institution) {
        $institutionServices.remove(institution).then(function (data) {
            if (data.Success) {
                console.log(vm.institutions.indexOf(institution));
                vm.institutions.splice(vm.institutions.indexOf(institution), 1);
            }
        });
    };

});

institutionsApp.controller("EditController", function ($location, $institutionServices, $scope) {
    var vm = this;

    $institutionServices.get($location.search()["id"]).then(function (data) {
        vm.institutionConfig = data.Results;
    });

    vm.Save = function () {
        
        $institutionServices.update(vm.institutionConfig).then(function (data) {
            if (data.Success) {

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["sdsadasasdsa"];
                //we can call this here to reset all errors and the form. if you redirect out on success, no need to call this.
                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});

institutionsApp.controller("CreateController", function ($location, $institutionServices, $scope) {
    var vm = this;

    vm.institutionConfig = {};
    vm.institutionConfig.Institution = {};

    vm.Save = function () {
        $institutionServices.create(vm.institutionConfig).then(function (data) {

            if (data.Success) {
                vm.institutionConfig = data.Results;

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["sdsadasasdsa"];

                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});