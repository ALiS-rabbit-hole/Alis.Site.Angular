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

    vm.reallyDelete = function (role) {

        $notificationServices.remove(role).then(function (data) {
            if (data.Success) {

                // vm.roles.splice(vm.roles.indexOf(role), 1);

                vm.getNotifications(vm.appID, vm.eventID);
            }
        });
    };

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
        vm.Notification.GeneratedBy = data.Results;
        vm.Notification.Type = 0;
        vm.Notification.Message = "";
        vm.Notification.From = "";

        var reader = new commonmark.Parser();
        var writer = new commonmark.HtmlRenderer();

        var parsed = reader.parse(vm.Notification.GeneratedBy.Details);

        vm.details = writer.render(parsed);

        vm.fromRBL = vm.Notification.GeneratedBy.HasTarget ? "DefaultTarget" : "DefaultRecipient";

        console.log(vm.fromRBL);
    });

    vm.AppendTag = function (tag) {


        vm.Notification.Message += tag.Name;
    };


    vm.Save = function () {

        vm.Notification.Recipients = vm.selectedTarget;
        $notificationServices.create(vm.Notification).then(function (data) {
            if (data.Success) {
                //todo: should this be outside the success function??
                $scope.$broadcast('show-errors-reset');
                vm.Notification = data.Results;

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The notification was successfully created."];
            } else {
                vm.Notification.Recipients = "";
            }
        });
        
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
            vm.fromRBL = "Override";
        else
            vm.fromRBL = vm.Notification.GeneratedBy.HasTarget ? "DefaultTarget" : "DefaultRecipient";

        if (vm.Notification.Recipients != null)
            vm.selectedTarget = "Custom";

        var reader = new commonmark.Parser();
        var writer = new commonmark.HtmlRenderer();

        var parsed = reader.parse(vm.Notification.GeneratedBy.Details);

        vm.details = writer.render(parsed);


        var result = findByName(vm.Notification.GeneratedBy.Targets, vm.Notification.Recipients);

        if (result != null) {
            vm.selectedTarget = result;
            vm.Notification.Recipients = "";
        }
    });

    $applicationServices.get(vm.appID).then(function (data) {
        vm.application = data.Results;


    });


    function findByName(source, name) {
        //console.log(id);
        for (var i = 0; i < source.length; i++) {
            //console.log(source[i]);
            if (source[i] == name) {

                return source[i];
            }
        }
        throw "Couldn't find object with name: " + name;
    }

    vm.Save = function () {

        vm.Notification.Recipients = vm.selectedTarget;
        $scope.$broadcast('show-errors-reset');

        $notificationServices.update(vm.Notification).then(function (data) {
            if (data.Success) {
                //todo: should this be outside the success function??
                $scope.$broadcast('show-errors-reset');
               // vm.Notification = data.Results;

                $scope.notifications.success.valid = true;
                $scope.notifications.success.descriptions = ["The notification was successfully updated."];
            } else {
                vm.Notification.Recipients = "";
            }
        });
    };
});

