var rolesApp = angular.module('rolesApp', ['roleServices', 'helpers', 'ui.bootstrap', 'ui.bootstrap.showErrors']);

rolesApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    $sceProvider.enabled(false);

    $stateProvider.state('roles',
        {
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('roles.home',
        {
            url: "/roles",
            controller: 'RolesHomeController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Roles/Templates/home.html",
            ncyBreadcrumb: { label: "Roles Home" }
        })
        .state('roles.edit',
        {
            url: "/roles/edit/:id",
            controller: 'RolesEditController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Roles/Templates/edit.html",
            ncyBreadcrumb: { label: "Edit Role", parent: 'roles.home' }
        })
        .state('roles.create',
        {
            url: "/roles/create",
            controller: 'RolesCreateController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Roles/Templates/create.html",
            ncyBreadcrumb: { label: "Create Role", parent: 'roles.home' }
        });
});

rolesApp.controller("RolesHomeController", function ($roleServices) {
    var vm = this;


    $roleServices.getQueryItem(vm.query).then(function (data) {
        vm.query = data.Results;

        $roleServices.getWithQuery(vm.query).then(function (data) {
            vm.roles = data.Results;
        }).catch(function (error) {
            console.log(error);
        });


    }).catch(function (error) {
        console.log(error);
    });


    vm.reallyDelete = function (role) {

        $roleServices.remove(role).then(function (data) {
            if (data.Success) {

                // vm.roles.splice(vm.roles.indexOf(role), 1);

                $roleServices.getWithQuery(vm.query).then(function (data) {
                    vm.roles = data.Results;
                }).catch(function (error) {
                    console.log(error);
                });
            }
        });
    };



    vm.pageChanged = function () {
        $roleServices.getWithQuery(vm.query).then(function (data) {
            vm.roles = data.Results;
        }).catch(function (error) {
            console.log(error);
        });
    };

    vm.reorder = function (column) {

        if (column === vm.query.OrderBy) {
            vm.query.Direction === "Asc" ? vm.query.Direction = "Desc" : vm.query.Direction = "Asc";
        } else {
            vm.query.Direction = "Asc";
            vm.query.OrderBy = column;
        }

        $roleServices.getWithQuery(vm.query).then(function (data) {
            vm.roles = data.Results;
        }).catch(function (error) {
            console.log(error);
        });
    };

    vm.getGlyphClass = function (column) {

        //<span ng-class="{'glyphicon glyphicon-triangle-bottom': vm.query.OrderBy!='username', 'glyphicon-triangle-top': vm.query.OrderBy==='username' && vm.query.Direction === 'Desc', 'glyphicon-triangle-bottom': vm.query.OrderBy==='username' && vm.query.Direction === 'Asc'}" aria-hidden="true"></span></a></th>
        if (vm.query === undefined || column !== vm.query.OrderBy)
            return "glyphicon glyphicon-triangle-bottom";

        if (column === vm.query.OrderBy && vm.query.Direction === "Desc")
            return "glyphicon glyphicon-triangle-top";
        else
            return "glyphicon glyphicon-triangle-bottom";
    };



});

rolesApp.controller("RolesEditController", function ($roleServices, $stateParams, $scope) {
    var vm = this;

    console.log($scope.backRoute);

    $roleServices.get($stateParams.id).then(function (data) {
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

rolesApp.controller("RolesCreateController", function ($location, $roleServices, $scope) {
    var vm = this;

    vm.role = {};

    vm.Save = function () {
        $roleServices.create(vm.role).then(function (data) {
            if (data.Success) {
                vm.role = data.Results;
                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});