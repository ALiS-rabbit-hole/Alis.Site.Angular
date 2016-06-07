var usersApp = angular.module('usersApp', ['ngRoute', 'userServices', 'roleServices', 'institutionServices', 'ui.bootstrap.showErrors', 'helpers', 'customFilters', 'checklist-model']);

usersApp.config(function ($routeProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    //var dir = "http://alissitea1.azurewebsites.net/AngularJs/Apps/Users/Templates/";
    var dir = config.angularRoot + "/Apps/Users/Templates/";
    $sceProvider.enabled(false);



    $routeProvider.when('/Home', {
        controller: 'HomeController',
        controllerAs: "vm",
        templateUrl: dir + 'home.html'
    }).when('/Edit', {
        controller: 'EditController',
        controllerAs: 'vm',
        templateUrl: dir + 'edit.html'
    }).when('/Create', {
        controller: 'CreateController',
        controllerAs: 'vm',
        templateUrl: dir + 'create.html'
    }).otherwise({
        redirectTo: '/Home'
    });
});

usersApp.controller("HomeController", function($userServices) {
    var vm = this;

    $userServices.getAll().then(function(data) {
        vm.users= data.Results;
    }).catch(function(error) {
        console.log(error);
    });
});

usersApp.controller("EditController", function ($userServices, $roleServices, $institutionServices, $location, $scope) {
    var vm = this;

    $userServices.get($location.search()["id"]).then(function (data) {
        vm.user = data.Results;
    });

    $roleServices.getAll().then(function (data) {
        vm.roles = data.Results;
    });

    $institutionServices.getAll().then(function (data) {
        vm.institutions = data.Results;

        if (vm.institutions != null && vm.institutions.length > 0 && vm.user != null && vm.user.Institutions != null && vm.user.Institutions.length > 0) {
            angular.forEach(vm.institutions, function(inst) {
                angular.forEach(vm.user.Institutions, function (userInst) {
                    if (inst.ID == userInst.ID) {
                        inst.Checked = true;
                    }
                });
            });
        }
    });

    vm.addToInstitution = function (institution) {
       // $timeout(function () {
        console.log(institution);
        vm.user.Institutions.push(institution);

        console.log(vm.user.Institutions);
       // $scope.$apply();
        //}, 0, false);
    };

    vm.removeInstitution = function(institution) {
        vm.user.Institutions.splice(vm.user.Institutions.indexOf(institution), 1);
    };

    vm.Save = function () {
        $scope.$broadcast('show-errors-reset');
        $userServices.update(vm.user).then(function (data) {
     
            if (data.Success) {

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The user '" + vm.user.Username + "' was successfully updated."];

             
            }
        });
    };

});

usersApp.controller("CreateController", function ($userServices, $roleServices, $institutionServices, $location, $scope) {
    var vm = this;

    $userServices.newUser().then(function (data) {
        vm.user = data.Results;
    });

    $roleServices.getAll().then(function (data) {
        vm.roles = data.Results;
    });

    $institutionServices.getAll().then(function (data) {
        vm.institutions = data.Results;
    });

    vm.addToInstitution = function (institution) {
        vm.user.Institutions.push(institution);
    };

    vm.removeInstitution = function (institution) {
        vm.user.Institutions.splice(vm.user.Institutions.indexOf(institution), 1);
    };

    vm.Save = function () {
        $scope.$broadcast('show-errors-reset');
        $userServices.create(vm.user).then(function (data) {

            if (data.Success) {

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The user '" + vm.user.Username + "' was successfully created."];


            }
        });
    };

});