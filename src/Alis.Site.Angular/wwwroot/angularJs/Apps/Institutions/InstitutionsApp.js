var institutionsApp = angular.module('institutionsApp', ['institutionServices', 'roomServices', 'ui.bootstrap.showErrors', 'ui.bootstrap', 'helpers']);

institutionsApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    $sceProvider.enabled(false);

    $stateProvider
    .state('institutions', {
        abstract: true,
        template: '<div ui-view></div>'
    })
        .state('institutions.home', {
            url: "/institutions",
            controller: 'InstitutionsHomeController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Institutions/Templates/home.html",
            ncyBreadcrumb: { label: "Institutions Home" },
            authenticate: true
        })
        .state('institutions.edit', {
            url: "/institutions/edit/:id",
            controller: 'InstitutionsEditController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Institutions/Templates/edit.html",
            ncyBreadcrumb: { label: "Edit Institution", parent: 'institutions.home' },
            authenticate: true
        })
        .state('institutions.create', {
            url: "/institutions/create",
            controller: 'InstitutionsCreateController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Institutions/Templates/create.html",
            ncyBreadcrumb: { label: "Create Institution", parent: 'institutions.home' },
            authenticate: true
        });
});

institutionsApp.controller("InstitutionsHomeController", function ($institutionServices) {
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

institutionsApp.controller("InstitutionsEditController", function ($stateParams, $institutionServices, $roomServices, $scope) {
    var vm = this;

    $institutionServices.get($stateParams.id).then(function (data) {
        vm.institution = data.Results;

        $roomServices.getTypes().then(function (roomData) {
            vm.roomTypes = roomData.Results;
        });
    });

    $scope.isChecked = function (id) {

        for (var i = 0; i < vm.institution.RoomTypes.length; i++) {
            if (vm.institution.RoomTypes[i].ID == id) {
                return true;
            }
        }
        return false;
    };

    vm.addVariant = function(type) {

        var index = vm.institution.RoomTypes.indexOf(type);
        console.log(index);
        if (vm.institution.RoomTypes[index].RoomTypeVariant == undefined) {
            vm.institution.RoomTypes[index].RoomTypeVariant = [];
        }

        vm.institution.RoomTypes[index].RoomTypeVariant.push({ Name: '', Abbreviation: '' });
    }

    vm.removeVariant = function(type, variant) {
        var index = vm.institution.RoomTypes.indexOf(type);
        

        vm.institution.RoomTypes[index].RoomTypeVariant.splice(vm.institution.RoomTypes[index].RoomTypeVariant.indexOf(variant), 1);
    }

    vm.Save = function () {
        
        $institutionServices.update(vm.institution).then(function (data) {
             if (data.Success) {
 
                 $scope.notifications.success.valid = true;
                 $scope.notifications.success.descriptions = ["sdsadasasdsa"];
                 //we can call this here to reset all errors and the form. if you redirect out on success, no need to call this.
                 $scope.$broadcast('show-errors-reset');
             }
         });
    };
});

institutionsApp.controller("InstitutionsCreateController", function ($institutionServices, $roomServices, $scope) {
    var vm = this;

    vm.institution = {};
    vm.institution.RoomTypes = {};

    $roomServices.getTypes().then(function (roomData) {
        vm.roomTypes = roomData.Results;
    });

    $scope.isChecked = function (id) {

        for (var i = 0; i < vm.institution.RoomTypes.length; i++) {
            if (vm.institution.RoomTypes[i].ID == id) {
                return true;
            }
        }
        return false;
    };

    vm.addVariant = function (type) {

        var index = vm.institution.RoomTypes.indexOf(type);
        console.log(index);
        if (vm.institution.RoomTypes[index].RoomTypeVariant == undefined) {
            vm.institution.RoomTypes[index].RoomTypeVariant = [];
        }

        vm.institution.RoomTypes[index].RoomTypeVariant.push({ Name: '', Abbreviation: '' });
    }

    vm.removeVariant = function (type, variant) {
        var index = vm.institution.RoomTypes.indexOf(type);


        vm.institution.RoomTypes[index].RoomTypeVariant.splice(vm.institution.RoomTypes[index].RoomTypeVariant.indexOf(variant), 1);
    }


    vm.Save = function () {
        $institutionServices.create(vm.institution).then(function (data) {

            if (data.Success) {
                vm.institution = data.Results;

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["sdsadasasdsa"];

                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});