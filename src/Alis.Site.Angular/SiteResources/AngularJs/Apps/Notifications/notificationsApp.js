var notificationsApp = angular.module('notificationsApp', ['ngRoute', 'notificationServices', 'applicationServices', 'eventServices', 'ui.bootstrap.showErrors', 'helpers']);

notificationsApp.config(function ($routeProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    var dir = config.angularRoot + "/Apps/Notifications/Templates/";
    $sceProvider.enabled(false);


    
    $routeProvider.when('/Home', {
        controller: 'HomeController',
        controllerAs: "vm",
        templateUrl: dir + 'Home.html'
    }).when('/Notifications', {
        controller: 'NotificationsController',
        controllerAs: "vm",
        templateUrl: dir + 'Notifications.html'
    }).when('/Create', {
        controller: 'CreateController',
        controllerAs: "vm",
        templateUrl: dir + 'Create.html'
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

notificationsApp.controller("NotificationsController", function ($notificationServices, $applicationServices, $location) {
    var vm = this;

    vm.appID = $location.search()["eventID"];
    vm.eventID = $location.search()["appID"];

    //todo: could do with an event service, so we can use it's details to flesh out the notifications.html page.
    $notificationServices.get($location.search()["eventID"]).then(function (data) {
        vm.notifications = data.Results;
    });
});

notificationsApp.controller("CreateController", function ($notificationServices, $applicationServices, $eventServices, $location, $scope) {
    var vm = this;

    vm.Notification = {};

    $eventServices.get($location.search()["eventID"]).then(function (data) {
        vm.Event = data.Results;
        vm.Notification.EventID = vm.Event.ID;
        vm.Notification.Type = 0;
    });

 
    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();

    

    vm.Create = function() {
        $scope.$broadcast('show-errors-reset');

        var parsed = reader.parse(vm.Notification.Message);

        console.log(writer.render(parsed));

        /*$notificationServices.create(vm.Notification).then(function (data) {

            if (data.Success) {

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The notification was successfully updated."];


            }
        });*/
    };

    //todo: could do with an event service, so we can use it's details to flesh out the notifications.html page.
    /*   $notificationServices.get($location.search()["eventID"]).then(function (data) {
           vm.notifications = data.Results;
       });*/
});