var roomsApp = angular.module('roomsApp', ['roomServices', 'accountServices','helpers', 'ui.bootstrap', 'ui.bootstrap.showErrors']);

roomsApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    $sceProvider.enabled(false);

    $stateProvider.state('rooms',
        {
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('rooms.home',
        {
            url: "/rooms",
            controller: 'RoomsHomeController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Rooms/Templates/home.html",
            ncyBreadcrumb: { label: "Rooms Home" },
            authenticate: true
        }).state('rooms.create',
        {
            url: "/rooms/create",
            controller: 'RoomsCreateController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Rooms/Templates/create.html",
            ncyBreadcrumb: { label: "Rooms Create", parent: 'rooms.home' },
            authenticate: true
        }).state('rooms.edit',
        {
            url: "/rooms/edit/:id",
            controller: 'RoomsEditController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Rooms/Templates/edit.html",
            ncyBreadcrumb: { label: "Rooms Edit", parent: 'rooms.home' },
            authenticate: true
        });
});

roomsApp.controller("RoomsHomeController", function ($roomServices, $accountServices) {
    var vm = this;

    $roomServices.getAll().then(function (data) {
        vm.rooms = data.Results;
        console.log(vm.rooms);
    });


    vm.reallyDelete = function (role) {

        $roomServices.remove(role).then(function (data) {
            if (data.Success) {

                // vm.roles.splice(vm.roles.indexOf(role), 1);

                $roomServices.getAll().then(function (data) {
                    vm.rooms = data.Results;
                    console.log(vm.rooms);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        });
    };
});

roomsApp.controller("RoomsCreateController", function ($roomServices, $scope, $accountServices) {
    var vm = this;

    $roomServices.new().then(function (data) {
        vm.room = data.Results;

        $roomServices.getTypes().then(function (roomData) {
            vm.roomTypes = roomData.Results;
        });

        vm.selectedType = vm.room.Type;
    });

    vm.removeOwner = function (owner) {
        vm.room.Owners.splice(vm.room.Owners.indexOf(owner), 1);
    };

    vm.Save = function () {

        if (!!vm.selectedType) {
            vm.room.Type = vm.selectedType;
            vm.room.Type.RoomTypeVariant = vm.RoomTypeVariant;
        }

        $scope.$broadcast('show-errors-reset');
        $roomServices.create(vm.room).then(function(data) {
            if (data.Success) {
                vm.room = data.Results;
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The room '" + vm.room.Name + "' was successfully created."];

            }
        });
    }
});

roomsApp.controller("RoomsEditController", function ($roomServices, $stateParams, $scope, $accountServices) {
    var vm = this;

    $roomServices.get($stateParams.id).then(function (data) {
        vm.room = data.Results;

        $roomServices.getTypes().then(function (roomData) {
            vm.roomTypes = roomData.Results;
        });

        vm.selectedType = vm.room.Type;
    });

    

    vm.removeOwner = function (owner) {
        vm.room.Owners.splice(vm.room.Owners.indexOf(owner), 1);
    };


    vm.Save = function () {
        console.log("in save();");
        if (!!vm.selectedType) {
            vm.room.Type = vm.selectedType;
            vm.room.Type.RoomTypeVariant = vm.RoomTypeVariant;
        }

        $scope.$broadcast('show-errors-reset');
        $roomServices.update(vm.room).then(function (data) {
            if (data.Success) {
               
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The room '" + vm.room.Name + "' was successfully updated."];

            }
        });
    }
});