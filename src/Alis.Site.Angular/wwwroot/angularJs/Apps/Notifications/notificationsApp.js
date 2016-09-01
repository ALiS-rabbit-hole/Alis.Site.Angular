var notificationsApp = angular.module('notificationsApp', ['notificationServices', 'applicationServices', 'eventServices','ui.bootstrap', 'ui.bootstrap.showErrors', 'helpers', 'customFilters']);

notificationsApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    $sceProvider.enabled(false);

    $stateProvider.state('notifications',
        {
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('notifications.home',
        {
            url: "/notifications",
            controller: 'NotificationsHomeController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Notifications/Templates/home.html",
            ncyBreadcrumb: { label: "Notifications Home" }
        })
        .state('notifications.notifications',
        {
            url: "/notifications/notifications",
            controller: 'NotificationsNotificationsController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Notifications/Templates/notifications.html",
            ncyBreadcrumb: { label: "Users Home" }
        })
        .state('notifications.create',
        {
            url: "/notifications/create",
            controller: 'NotificationsCreateController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Notifications/Templates/create.html",
            ncyBreadcrumb: { label: "Users Home" }
        })
        .state('notifications.edit',
        {
            url: "/notifications/edit/:appID/:eventID",
            controller: 'NotificationsEditController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Notifications/Templates/edit.html",
            ncyBreadcrumb: { label: "Users Home" }
        });
});

notificationsApp.controller("NotificationsHomeController", function ($stateParams, $notificationServices, $applicationServices, $eventServices) {
    var vm = this;


    vm.appID = $stateParams.appID;
    vm.eventID = $stateParams.eventID;


    
    $applicationServices.getAll().then(function (data) {
        vm.applications = data.Results;
    });

    vm.getNotifications = function(appID, eventID) {

        vm.eventID = eventID;
        vm.appID = appID;

        $eventServices.get(eventID).then(function (data) {
            vm.Event = data.Results;
            vm.details = {};

            if (vm.Event.Details != null) {
                var reader = new commonmark.Parser();
                var writer = new commonmark.HtmlRenderer();

                var parsed = reader.parse(vm.Event.Details);

                vm.details = writer.render(parsed);
            }

          //  vm.selectedApplication = vm.appID;
           // vm.selectedEvent = vm.eventID;

            
        });

        //todo: could do with an event service, so we can use it's details to flesh out the notifications.html page.
        $notificationServices.getByEventID(eventID).then(function (data) {
            vm.notifications = data.Results;
        });



    };


    vm.Create = function () {
        $scope.$broadcast('show-errors-reset');
    };
});

notificationsApp.controller("NotificationsNotificationsController", function ($notificationServices, $eventServices, $applicationServices, $location, $sce) {
    var vm = this;

    vm.appID = $location.search()["eventID"];
    vm.eventID = $location.search()["appID"];



    $eventServices.get($location.search()["eventID"]).then(function (data) {
        vm.Event = data.Results;

        var reader = new commonmark.Parser();
        var writer = new commonmark.HtmlRenderer();

        var parsed = reader.parse(vm.Event.Details);

        vm.details = writer.render(parsed);
    });

    //todo: could do with an event service, so we can use it's details to flesh out the notifications.html page.
    $notificationServices.getByEventID($location.search()["eventID"]).then(function (data) {
        vm.notifications = data.Results;
    });
});

notificationsApp.controller("NotificationsCreateController", function ($notificationServices, $applicationServices, $eventServices, $location, $scope) {
    var vm = this;

    vm.Notification = {};

    vm.appID = $location.search()["appID"];
    vm.eventID = $location.search()["eventID"];

    vm.overrideFrom = 'nope';


    $applicationServices.get(vm.appID).then(function (data) {
        vm.application = data.Results;
    });

    $eventServices.get($location.search()["eventID"]).then(function (data) {
        vm.Event = data.Results;
        vm.Notification.EventID = vm.Event.ID;
        vm.Notification.Type = 0;
        vm.Notification.Message = "";

        var reader = new commonmark.Parser();
        var writer = new commonmark.HtmlRenderer();

        var parsed = reader.parse(vm.Event.Details);

        vm.details = writer.render(parsed);

        vm.fromRBL = vm.Event.HasTarget ? "DefaultTarget" : "DefaultRecipient";

        console.log(vm.fromRBL);
    });

    vm.AppendTag = function (tag) {


        vm.Notification.Message += tag.Name;
    };


    vm.Create = function () {
        $notificationServices.create(vm.Notification).then(function (data) {

        });
        $scope.$broadcast('show-errors-reset');
    };
});

notificationsApp.controller("NotificationsEditController", function ($notificationServices, $applicationServices, $location, $scope) {
    var vm = this;

    vm.appID = $location.search()["appID"];


    $notificationServices.get($location.search()["id"]).then(function (data) {
        vm.Notification = data.Results;

        if (vm.Notification.From != null)
            vm.fromRBL = "Override";
        else
            vm.fromRBL = vm.Notification.GeneratedBy.HasTarget ? "DefaultTarget" : "DefaultRecipient";
    });

    var reader = new commonmark.Parser();
    var writer = new commonmark.HtmlRenderer();

    vm.Create = function () {
        $scope.$broadcast('show-errors-reset');

        var parsed = reader.parse(vm.Notification.Message);

        console.log(writer.render(parsed));

    };
});

