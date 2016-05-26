var rolesApp = angular.module('rolesApp', ['ngRoute', 'roleServices', 'ui.bootstrap.showErrors']);

rolesApp.config(function ($routeProvider, $sceProvider, $compileProvider, showErrorsConfigProvider) {

    $compileProvider.debugInfoEnabled(false);
    showErrorsConfigProvider.showSuccess(true);

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
    }).otherwise({
        redirectTo: '/Home'
    });
});

rolesApp.controller("HomeController", function ($roleServices) {
    var vm = this;

    $roleServices.getAllRoles().then(function(data) {
        vm.roles = data.Results;
    });
});

rolesApp.controller("EditController", function ($location, $roleServices, $scope) {
    var vm = this;

    $roleServices.get($location.search()["id"]).then(function (data) {
        vm.role = data.Results;
    });

    vm.Save = function (myForm) {
        
        $roleServices.update(vm.role).then(function (data) {
            if (data.Success) {

                //we can call this here to reset all errors and the form. if you redirect out on success, no need to call this.
                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});