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

groupsApp.controller("GroupsHomeController", function ($groupServices, $scope) {
    var vm = this;

    $groupServices.getAll().then(function (data) {
        vm.groups = data.Results;
    });

    vm.reallyDelete = function (role) {

        $groupServices.remove(role).then(function (data) {
            if (data.Success) {

                // vm.roles.splice(vm.roles.indexOf(role), 1);
                $groupServices.getAll().then(function (data) {
                    vm.groups = data.Results;
                });
            }
        }, function (error) {
            //todo: need some form of error mechanism to display errors outside of forms.
        });
    };
});

groupsApp.controller("GroupsCreateController", function ($groupServices, $scope) {
    var vm = this;

    $groupServices.new().then(function(data) {
        vm.group = data.Results;
        vm.group.Members = [];
    });

    vm.removeMember = function (member) {
        vm.group.Members.splice(vm.group.Members.indexOf(member), 1);
    };

    vm.Save = function () {

        $scope.$broadcast('show-errors-reset');
        $groupServices.create(vm.group).then(function (data) {
            if (data.Success) {
                vm.group = data.Results;
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The group '" + vm.group.Name + "' was successfully created."];

            }
        });
    }
});

groupsApp.controller("GroupsEditController", function ($groupServices, $stateParams, $scope) {
    var vm = this;

    $groupServices.get($stateParams.id).then(function (data) {
        vm.group = data.Results;
    });

    vm.removeMember = function (member) {
        vm.group.Members.splice(vm.group.Members.indexOf(member), 1);
    };

    vm.Save = function () {

        $scope.$broadcast('show-errors-reset');
        $groupServices.update(vm.group).then(function (data) {
            if (data.Success) {
                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The group '" + vm.group.Name + "' was successfully updated."];

            }
        });
    }
});