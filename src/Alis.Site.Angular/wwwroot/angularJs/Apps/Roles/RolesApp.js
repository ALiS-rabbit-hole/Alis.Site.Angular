var rolesApp = angular.module('rolesApp', ['ngRoute', 'roleServices']);

rolesApp.config(function ($routeProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

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

rolesApp.controller("EditController", function ($location, $roleServices) {
    var vm = this;

    $roleServices.get($location.search()["id"]).then(function (data) {
        vm.role = data.Results;
    });

    vm.Save = function () {
        $roleServices.update(vm.role).then(function (data) {
            if (data.Success) {
                alert("Success!");
            } else {
                alert("fail!");
            }
        });
    };
});