var notificationsApp = angular.module('notificationsApp', ['notificationServices', 'applicationServices', 'eventServices','ui.bootstrap', 'ui.bootstrap.showErrors', 'helpers', 'customFilters']);

notificationsApp.config(function ($stateProvider, $sceProvider, $compileProvider) {

    $compileProvider.debugInfoEnabled(false);
   // showErrorsConfigProvider.showSuccess(true);

    $sceProvider.enabled(false);

    $stateProvider.state('notifications',
        {
            abstract: true,
            template: '<div ui-view></div>',
            ncyBreadcrumb: { label: "Notification Home", parent: 'users.home' }
        })
        .state('notifications.home',
        {
            url: "/notifications?appID&eventID",
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
            url: "/notifications/create/:appID/:eventID",
            controller: 'NotificationsCreateController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Notifications/Templates/create.html",
            ncyBreadcrumb: { label: "Create Notification", parent: 'notifications.home' }
        })
        .state('notifications.edit',
        {
            url: "/notifications/edit/:id/:appID/:eventID",
            controller: 'NotificationsEditController',
            controllerAs: "vm",
            templateUrl: "angularJs/Apps/Notifications/Templates/edit.html",
            ncyBreadcrumb: { label: "Edit Notification", parent: 'notifications.home' }
        });
});

notificationsApp.controller("NotificationsHomeController", function ($stateParams, $notificationServices, $applicationServices, $eventServices) {
    var vm = this;


    vm.appID = $stateParams.appID;
    vm.eventID = $stateParams.eventID;

    console.log($stateParams.appID);

    
    $applicationServices.getAll().then(function (data) {
        vm.applications = data.Results;

        //Set up previous state if appid and event id have values
        if (vm.appID != null) {

            vm.selectedApplication = findById(vm.applications, vm.appID);

            if (vm.eventID != null && (vm.selectedApplication != null && vm.selectedApplication.Events.length > 0)) {
                vm.selectedEvent = findById(vm.selectedApplication.Events, vm.eventID);
       
                if (vm.selectedEvent != null) {
                    vm.getNotifications(vm.appID, vm.eventID);


                }
            }
        }


    });

    vm.getNotifications = function(appID, eventID) {

        if (appID == undefined || eventID == undefined) {
            vm.details = {};
            vm.notifications = null;
            return;
        }
        vm.eventID = eventID;
        vm.appID = appID;
        console.log(eventID);

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


    function findById(source, id) {
        //console.log(id);
        for (var i = 0; i < source.length; i++) {
            //console.log(source[i]);
            if (source[i].ID == id) {
               
                return source[i];
            }
        }
        throw "Couldn't find object with id: " + id;
    }

    vm.Create = function () {
        $scope.$broadcast('show-errors-reset');
    };
});

notificationsApp.controller("NotificationsCreateController", function ($notificationServices, $applicationServices, $eventServices, $stateParams, $scope) {
    var vm = this;

    vm.Notification = {};

    vm.appID = $stateParams.appID;
    vm.eventID = $stateParams.eventID;

   // console.log($stateParams);
   // vm.overrideFrom = 'nope';


    $applicationServices.get(vm.appID).then(function (data) {
        vm.application = data.Results;
    });

    $eventServices.get(vm.eventID).then(function (data) {
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

notificationsApp.controller("NotificationsEditController", function ($notificationServices, $applicationServices, $eventServices, $stateParams, $scope) {
    var vm = this;

    vm.id = $stateParams.id;
    vm.appID = $stateParams.appID;
    vm.eventID = $stateParams.eventID;

    $notificationServices.get(vm.id).then(function (data) {
        vm.Notification = data.Results;

        if (vm.Notification.From != null)
            vm.fromRBL = vm.selectedTarget ="Override";
        else
            vm.fromRBL = vm.selectedTarget = vm.Notification.GeneratedBy.HasTarget ? "DefaultTarget" : "DefaultRecipient";
    });

    $applicationServices.get(vm.appID).then(function (data) {
        vm.application = data.Results;
    });

    $eventServices.get(vm.eventID).then(function (data) {
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
        $scope.$broadcast('show-errors-reset');


    };
});

