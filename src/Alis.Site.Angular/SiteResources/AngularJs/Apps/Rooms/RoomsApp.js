var rolesApp = angular.module('roomsApp', ['roomServices', 'helpers', 'ui.bootstrap', 'ui.bootstrap.showErrors']);

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
            ncyBreadcrumb: { label: "Rooms Home" }
        });
});

rolesApp.controller("RoomsHomeController", function ($roomServices) {
    var vm = this;

    $roomServices.getAll().then(function (data) {
        console.log(data);
    });
});