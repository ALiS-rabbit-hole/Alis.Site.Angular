var applicationsApp = angular.module('applicationsApp', ['applicationServices', 'ui.bootstrap.showErrors', 'ui.bootstrap', 'helpers']);

applicationsApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    $sceProvider.enabled(false);

    $stateProvider.state('applications',
    {
        abstract: true,
        template: '<div ui-view></div>'
    })
        .state('applications.home',
        {
            url: "/applications",
            controller: 'ApplicationsHomeController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Applications/Templates/home.html",
            ncyBreadcrumb: { label: "Applications Home" }
        }).state('applications.view',
        {
            url: "/applications/view/:id",
            controller: 'ApplicationsViewController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Applications/Templates/view.html",
            ncyBreadcrumb: { label: "Application View" }
        });
});

applicationsApp.controller("ApplicationsHomeController", function ($applicationServices) {
    var vm = this;

    $applicationServices.getAll().then(function (data) {
        vm.applications = data.Results;
    });
});

applicationsApp.controller("ApplicationsViewController", function ($stateParams, $applicationServices) {
    var vm = this;

    $applicationServices.get($stateParams.id).then(function (data) {
        console.log(data.Results);
        vm.application = data.Results;
    });
});