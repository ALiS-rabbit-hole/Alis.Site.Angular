var notificationsApp = angular.module('notificationsApp', ['ngRoute', 'notificationServices', 'applicationServices', 'ui.bootstrap.showErrors', 'helpers']);

notificationsApp.config(function ($routeProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    var dir = config.angularRoot + "/Apps/Notifications/Templates/";
    $sceProvider.enabled(false);


    
    $routeProvider.when('/Home', {
        controller: 'HomeController as ctrl',
        controllerAs: "vm",
        templateUrl: dir + 'Home.html'
    }).when('/Notifications', {
        controller: 'NotificationsController as ctrl',
        controllerAs: "vm",
        templateUrl: dir + 'Notifications.html'
    }).otherwise({
        redirectTo: '/Home'
    });
});

notificationsApp.controller("HomeController", function ($notificationServices, $applicationServices) {
    var vm = this;

    $applicationServices.getAll().then(function (data) {
        vm.applications = data.Results;
    });
});

notificationsApp.controller("NotificationsController", function ($notificationServices, $applicationServices) {
    var vm = this;

});