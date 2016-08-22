var usersApp = angular.module('usersApp', ['userServices', 'roleServices', 'institutionServices', 'ui.bootstrap', 'ui.bootstrap.showErrors', 'helpers', 'customFilters', 'checklist-model']);

usersApp.config(function ($sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);

    $sceProvider.enabled(false);




});

usersApp.controller("UsersHomeController", function ($userServices) {
    var vm = this;

    $userServices.getQueryItem(vm.query).then(function (data) {
        vm.query = data.Results;

        $userServices.getWithQuery(vm.query).then(function (data) {
            vm.users = data.Results;
        }).catch(function (error) {
            console.log(error);
        });


    }).catch(function (error) {
        console.log(error);
    });

    vm.pageChanged = function() {
        $userServices.getWithQuery(vm.query).then(function (data) {
            vm.users = data.Results;
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

        $userServices.getWithQuery(vm.query).then(function(data) {
            vm.users = data.Results;
        }).catch(function(error) {
            console.log(error);
        });
    };

    vm.getGlyphClass = function (column) {

        //<span ng-class="{'glyphicon glyphicon-triangle-bottom': vm.query.OrderBy!='username', 'glyphicon-triangle-top': vm.query.OrderBy==='username' && vm.query.Direction === 'Desc', 'glyphicon-triangle-bottom': vm.query.OrderBy==='username' && vm.query.Direction === 'Asc'}" aria-hidden="true"></span></a></th>
        if (vm.query === undefined || column !== vm.query.OrderBy)
            return "glyphicon glyphicon-triangle-bottom";

        if(column === vm.query.OrderBy && vm.query.Direction === "Desc")
            return "glyphicon glyphicon-triangle-top";
        else
            return "glyphicon glyphicon-triangle-bottom";
    };
});

usersApp.controller("UsersEditController", function ($userServices, $roleServices, $institutionServices, $stateParams, $scope) {
    var vm = this;

    $userServices.get($stateParams.id).then(function (data) {
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

usersApp.controller("UsersCreateController", function ($userServices, $roleServices, $institutionServices, $scope) {
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
        alert("here");
        $scope.$broadcast('show-errors-reset');
        $userServices.create(vm.user).then(function (data) {

            if (data.Success) {

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The user '" + vm.user.Username + "' was successfully created."];


            }
        });
    };

});