var groupsApp = angular.module('groupsApp', ['groupServices', 'helpers', 'ui.bootstrap', 'ui.bootstrap.showErrors']);

groupsApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    $sceProvider.enabled(false);

    $stateProvider.state('groups',
        {
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('groups.home',
        {
            url: "/groups",
            controller: 'GroupsHomeController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Groups/Templates/home.html",
            ncyBreadcrumb: { label: "Groups Home" },
            authenticate: true
        }).state('groups.create',
        {
            url: "/groups/create",
            controller: 'GroupsCreateController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Groups/Templates/create.html",
            ncyBreadcrumb: { label: "Groups Create", parent: 'groups.home' },
            authenticate: true
        }).state('groups.edit',
        {
            url: "/groups/edit/:id",
            controller: 'GroupsEditController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Groups/Templates/edit.html",
            ncyBreadcrumb: { label: "Groups Edit", parent: 'groups.home' },
            authenticate: true
        });
});

groupsApp.controller("GroupsHomeController", function ($groupServices) {
    var vm = this;

    $groupServices.getAll().then(function (data) {
        vm.groups = data.Results;
    });
});

groupsApp.controller("GroupsCreateController", function ($groupServices, $scope) {
    var vm = this;

    vm.group = {};
    vm.group.Members = [];

    vm.Save = function () {

        $scope.$broadcast('show-errors-reset');
        $groupServices.create(vm.room).then(function (data) {
            if (data.Success) {
                vm.room = data.Results;
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The room '" + vm.room.Name + "' was successfully created."];

            }
        });
    }
});

groupsApp.controller("GroupsEditController", function ($groupServices, $stateParams) {
    var vm = this;

    $groupServices.get($stateParams.id).then(function (data) {
        vm.group = data.Results;

        vm.selectedType = vm.room.Type;
    });
});