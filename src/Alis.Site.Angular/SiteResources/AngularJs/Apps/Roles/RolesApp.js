var rolesApp = angular.module('rolesApp', ['ngRoute', 'roleServices', 'helpers', 'ui.bootstrap.showErrors']);

rolesApp.config(function ($routeProvider, $sceProvider, $compileProvider, showErrorsConfigProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    var dir = config.angularRoot + "/Apps/Roles/Templates/";
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

rolesApp.controller("HomeController", function ($roleServices) {
    var vm = this;

    $roleServices.getAll().then(function (data) {
        vm.roles = data.Results;
    });

    vm.delete = function (role) {

        $roleServices.remove(role).then(function (data) {
            if (data.Success) {

                vm.roles.splice(vm.roles.indexOf(role), 1);
            }
        });
    };

});

rolesApp.controller("EditController", function ($location, $roleServices, $scope) {
    var vm = this;

    $roleServices.get($location.search()["id"]).then(function (data) {
        vm.role = data.Results;
    });

    vm.Save = function () {
        
        $roleServices.update(vm.role).then(function (data) {
            if (data.Success) {
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The role was successfully created."];
                //we can call this here to reset all errors and the form. if you redirect out on success, no need to call this.
                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});

rolesApp.controller("CreateController", function ($location, $roleServices, $scope) {
    var vm = this;

    vm.role = {};

    vm.Create = function () {
        $roleServices.create(vm.role).then(function (data) {
            if (data.Success) {
                vm.role = data.Results;
                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});