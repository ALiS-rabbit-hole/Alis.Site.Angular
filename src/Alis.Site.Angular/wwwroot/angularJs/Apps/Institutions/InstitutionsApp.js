var institutionsApp = angular.module('institutionsApp', ['institutionServices', 'ui.bootstrap.showErrors', 'ui.bootstrap', 'helpers']);

institutionsApp.config(function ($sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    $sceProvider.enabled(false);



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

institutionsApp.controller("InstitutionsEditController", function ($location, $institutionServices, $scope) {
    var vm = this;

    $institutionServices.get($location.search()["id"]).then(function (data) {
        vm.institutionConfig = data.Results;
    });

    vm.Save = function () {
        
        $institutionServices.update(vm.institutionConfig).then(function (data) {
            if (data.Success) {

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["sdsadasasdsa"];
                //we can call this here to reset all errors and the form. if you redirect out on success, no need to call this.
                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});

institutionsApp.controller("InstitutionsCreateController", function ($location, $institutionServices, $scope) {
    var vm = this;

    vm.institutionConfig = {};
    vm.institutionConfig.Institution = {};

    vm.Save = function () {
        $institutionServices.create(vm.institutionConfig).then(function (data) {

            if (data.Success) {
                vm.institutionConfig = data.Results;

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["sdsadasasdsa"];

                $scope.$broadcast('show-errors-reset');
            }
        });
    };
});