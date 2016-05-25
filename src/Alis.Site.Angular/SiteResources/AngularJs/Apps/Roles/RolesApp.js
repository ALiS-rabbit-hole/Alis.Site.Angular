var rolesApp = angular.module('rolesApp', ['ngRoute', 'roleServices', 'ui.bootstrap.showErrors']);

rolesApp.config(function ($routeProvider, $sceProvider, $compileProvider, showErrorsConfigProvider) {

    $compileProvider.debugInfoEnabled(false);
    showErrorsConfigProvider.showSuccess(true);

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

rolesApp.controller("EditController", function ($location, $roleServices, $scope) {
    var vm = this;

    var previousErrors;

    $roleServices.get($location.search()["id"]).then(function (data) {
        vm.role = data.Results;
    });

    vm.Save = function (myForm) {
        
        $roleServices.update(vm.role).then(function (data) {
            if (data.Success) {
                if (previousErrors != null) {
                    for (prop in previousErrors) {
                        if (myForm[previousErrors[prop].Key]) {
                            angular.forEach(previousErrors[prop], function (validation) {
                                $scope.editRoleForm[previousErrors[prop].Key].$setValidity(previousErrors[prop].Key, true);
                            });
                        }
                    }
                    //set previous errors to null?
                }
                $scope.$broadcast('show-errors-reset');
            
            } else {

                var serverValidations =previousErrors = data.ErrorFields;
       
               for (prop in serverValidations) {
                   if (myForm[serverValidations[prop].Key]) {
                        angular.forEach(serverValidations[prop], function (validation) {
                            $scope.editRoleForm[serverValidations[prop].Key].$setValidity(serverValidations[prop].Key, false);
                            $scope.editRoleForm[serverValidations[prop].Key].$errorText = serverValidations[prop].Value;
                        });
                    }
                }

            }
        });
    };
});