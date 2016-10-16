var rolesApp = angular.module('roomsApp', ['roomServices', 'accountServices','helpers', 'ui.bootstrap', 'ngTagsInput', 'ui.bootstrap.showErrors']);

rolesApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

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

rolesApp.controller("RoomsHomeController", function ($roomServices, $accountServices) {
    var vm = this;

    $roomServices.getAll().then(function (data) {
        vm.rooms = data.Results;
        console.log(vm.rooms);
    });
});

rolesApp.controller("RoomsEditController", function ($roomServices, $stateParams, $accountServices) {
    var vm = this;

    $roomServices.get($stateParams.id).then(function (data) {
        vm.room = data.Results;

        $roomServices.getTypes().then(function (roomData) {
            vm.roomTypes = roomData.Results;
        });
    });


});