angular.module('templatescache', []).run(['$templateCache', function($templateCache) {$templateCache.put('angularJs/Templates/_addressForm.html','<div class="form-group" show-errors><label for="Name" class="col-sm-2 control-label">Friendly Name</label><div class="col-sm-10"><input type="text" class="form-control" name="Name" id="Name" placeholder="Name" ng-required ng-model="$parent.Address.Name"> <span class="help-block" ng-show="Address.Name.$invalid">{{Address.Name.$errorText}}</span></div></div><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Address 1</label><div class="col-sm-10"><input type="text" class="form-control" name="Address1" id="Address1" placeholder="Address 1" ng-required ng-model="$parent.Address.Address1"> <span class="help-block" ng-show="Address.Address1.$invalid">{{Address.Address1.$errorText}}</span></div></div><div class="form-group" show-errors><label for="Address2" class="col-sm-2 control-label">Address 2</label><div class="col-sm-10"><input type="text" class="form-control" name="Address2" id="Address2" placeholder="Address 2" ng-required ng-model="$parent.Address.Address2"> <span class="help-block" ng-show="Address.Address2.$invalid">{{Address.Address2.$errorText}}</span></div></div><div class="form-group" show-errors><label for="Town" class="col-sm-2 control-label">Town</label><div class="col-sm-10"><input type="text" class="form-control" name="Town" id="Town" placeholder="Town" ng-required ng-model="$parent.Address.Town"> <span class="help-block" ng-show="Address.Town.$invalid">{{Address.Town.$errorText}}</span></div></div><div class="form-group" show-errors><label for="Address2" class="col-sm-2 control-label">County</label><div class="col-sm-10"><input type="text" class="form-control" name="County" id="County" placeholder="County" ng-required ng-model="$parent.Address.County"> <span class="help-block" ng-show="Address.County.$invalid">{{Address.County.$errorText}}</span></div></div><div class="form-group" show-errors><label for="Address2" class="col-sm-2 control-label">Postcode</label><div class="col-sm-10"><input type="text" class="form-control" name="Postcode" id="Postcode" placeholder="Postcode" ng-required ng-model="$parent.Address.Postcode"> <span class="help-block" ng-show="Address.Postcode.$invalid">{{Address.Postcode.$errorText}}</span></div></div>');
$templateCache.put('angularJs/Templates/_institutionForm.html','<ul class="nav nav-tabs"><li role="presentation" class="active"><a data-target="#details" data-toggle="tab">Details</a></li><li role="presentation"><a data-target="#configuration" data-toggle="tab">Configuration</a></li></ul><form name="institutionForm" class="form-horizontal"><div class="tab-content"><div class="tab-pane active" id="details"><h4>Details</h4><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Edit Institution</label><div class="col-sm-10"><input type="text" class="form-control" id="name" name="Name" placeholder="Institution Name" ng-required ng-model="vm.institutionConfig.Institution.Name"> <span class="help-block" ng-show="institutionForm.Name.$invalid">{{institutionForm.Name.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a ng-href="{{back}}" class="btn btn-warning">Cancel</a></div></div></div><div class="tab-pane" id="configuration"><h4>Configuration</h4><div class="form-group" show-errors><label for="UploadName" class="col-sm-2 control-label">Name</label><div class="col-sm-10"><input type="text" class="form-control" id="UploadName" name="UploadName" placeholder="Upload Location Name" ng-required ng-model="vm.institutionConfig.UploadLocation.Name"> <span class="help-block" ng-show="institutionForm.UploadName.$invalid">{{institutionForm.UploadName.$errorText}}</span></div></div><div class="form-group" show-errors><label for="UploadLocation" class="col-sm-2 control-label">Upload Location</label><div class="col-sm-10"><input type="text" class="form-control" id="UploadLocation" name="UploadLocation" placeholder="Upload Location" ng-required ng-model="vm.institutionConfig.UploadLocation.Location"> <span class="help-block" ng-show="institutionForm.UploadLocation.$invalid">{{institutionForm.UploadLocation.$errorText}}</span></div></div></div></div></form>');
$templateCache.put('angularJs/Templates/_notificationForm.html','<notifications></notifications><div class="row"><div class="col-md-9"><form name="notificationForm" class="form-horizontal"><div class="form-group" show-errors><label for="from" class="col-sm-2 control-label">From</label><div class="col-sm-7"><input type="text" class="form-control" id="from" name="From" ng-disabled="vm.overrideFrom != \'Override\'" placeholder="From" ng-required ng-model="vm.Notification.From"> <span class="help-block" ng-show="notificationForm.From.$invalid">{{notificationForm.From.$errorText}}</span></div><div class="col-sm-3"><button type="button" class="btn btn-default" ng-model="vm.overrideFrom" uib-btn-checkbox btn-checkbox-true="\'Override\'" btn-checkbox-false="\'nope\'">Override</button></div></div><div class="form-group" show-errors><label for="to" class="col-sm-2 control-label">To</label><div class="col-sm-7"><input type="text" class="form-control" id="to" name="to" placeholder="To" ng-required ng-model="vm.Notification.Recipients" ng-disabled="vm.selectedTarget != \'Custom\'"> <span class="help-block" ng-show="notificationForm.Recipients.$invalid">{{notificationForm.Recipients.$errorText}}</span></div><div class="col-sm-3"><div class="btn-group"><select class="form-control" ng-options="target as target for target in vm.Notification.GeneratedBy.Targets" ng-model="vm.selectedTarget"></select></div></div></div><div class="form-group" show-errors><label for="subject" class="col-sm-2 control-label">Subject</label><div class="col-sm-10"><input type="text" class="form-control" id="subject" name="Subject" placeholder="Notifiction Subject" ng-required ng-model="vm.Notification.Subject"> <span class="help-block" ng-show="notificationForm.Subject.$invalid">{{notificationForm.Subject.$errorText}}</span></div></div><div class="form-group" show-errors><label for="message" class="col-sm-2 control-label">Message</label><div class="col-sm-10"><textarea class="form-control" id="message" name="Message" placeholder="Message" ng-required ng-model="vm.Notification.Message"></textarea><span class="help-block" ng-show="notificationForm.Message.$invalid">{{notificationForm.Message.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a class="btn btn-warning" ng-href="{{back}}?appID={{::vm.appID}}&eventID={{::vm.eventID}}">Back</a></div></div></form></div><div class="col-md-3"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Tags</h3></div><div class="panel-body"><p ng-repeat="tag in vm.Notification.GeneratedBy.Tags" popover-trigger="focus" popover-placement="top" popover-title="Details" uib-popover="{{tag.Description}}" ng-click="vm.AppendTag(tag)">{{tag.Name}}</p><br></div></div></div></div>');
$templateCache.put('angularJs/Templates/_notifications.html','<div class="alert alert-success fade in" ng-show="notifications.success.valid" role="alert"><a class="close" data-dismiss="alert">&times;</a> <strong>Success</strong><ul><li ng-repeat="description in notifications.success.descriptions">{{description}}</li></ul></div><div class="alert alert-danger fade in" ng-show="notifications.errors.invalid" role="alert"><a class="close" data-dismiss="alert">&times;</a> <strong>Error!</strong><ul><li ng-repeat="description in notifications.errors.descriptions">{{description}}</li></ul></div>');
$templateCache.put('angularJs/Templates/_paging.html','<nav><ul class="pagination"><li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li><li><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul>{{::queryItem.TotalNumberOfResults}}</nav>');
$templateCache.put('angularJs/Templates/_roleForm.html','<notifications></notifications><form name="editRoleForm" class="form-horizontal"><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Edit Role</label><div class="col-sm-10"><input type="text" class="form-control" id="name" name="Name" placeholder="Role Name" ng-required ng-model="vm.role.Name"> <span class="help-block" ng-show="editRoleForm.Name.$invalid">{{editRoleForm.Name.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a class="btn btn-warning" ng-href="{{back}}">Cancel</a></div></div></form>');
$templateCache.put('angularJs/Templates/_userForm.html','<notifications></notifications><form name="userForm" class="form-horizontal"><fieldset><uib-tabset active="activeForm"><uib-tab index="0" heading="Details"><h4>Details</h4><div class="form-group" show-errors><label for="username" class="col-sm-2 control-label">Username</label><div class="col-sm-10"><input type="text" class="form-control" id="username" name="Username" placeholder="Username" ng-required ng-model="vm.user.Username"> <span class="help-block" ng-show="userForm.Username.$invalid">{{userForm.Username.$errorText}}</span></div></div><div class="form-group" show-errors><label for="forename" class="col-sm-2 control-label">Forename</label><div class="col-sm-10"><input type="text" class="form-control" id="forename" name="Forename" placeholder="Forename" ng-required ng-model="vm.user.Forename"> <span class="help-block" ng-show="userForm.Forename.$invalid">{{userForm.Forename.$errorText}}</span></div></div><div class="form-group" show-errors><label for="surname" class="col-sm-2 control-label">Surname</label><div class="col-sm-10"><input type="text" class="form-control" id="surname" name="Surname" placeholder="Surname" ng-required ng-model="vm.user.Surname"> <span class="help-block" ng-show="userForm.Surname.$invalid">{{userForm.Surname.$errorText}}</span></div></div><div class="form-group" show-errors><label for="email" class="col-sm-2 control-label">Email</label><div class="col-sm-10"><input type="text" class="form-control" id="email" name="Email" placeholder="Email" ng-required ng-model="vm.user.Email"> <span class="help-block" ng-show="userForm.Email.$invalid">{{userForm.Email.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="checkbox"><label><input type="checkbox" ng-model="vm.user.Enabled"> Enabled</label></div></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a class="btn btn-warning" ng-href="{{back}}">Cancel</a></div></div></uib-tab><uib-tab index="1" heading="Access"><h4>Access</h4><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="panel panel-default"><div class="panel-heading">Roles</div><div class="panel-body"><label class="checkbox-inline" ng-repeat="role in ::vm.roles track by role.ID"><input type="checkbox" data-checklist-model="vm.user.Roles" data-checklist-value="role"> {{::role.Name}}</label></div></div></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="panel panel-default"><div class="panel-heading clearfix">Institutions<div class="btn-group pull-right" uib-dropdown is-open="status.isopen"><button id="single-button" type="button" class="btn btn-default dropdown-toggle" uib-dropdown-toggle ng-disabled="disabled">Add to Institution <span class="caret"></span></button><ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="single-button"><li ng-repeat="institution in vm.institutions | notInArray:vm.user.Institutions:\'ID\'"><a ng-click="vm.addToInstitution(institution)">{{institution.Name}}</a></li></ul></div></div><div class="panel-body"><div class="well well-sm" ng-repeat="institution in vm.user.Institutions"><h4>{{institution.Name}}</h4><button ng-click="vm.removeInstitution(institution)" class="btn btn-danger btn-sm pull-right">Remove</button><div><label class="checkbox-inline" ng-repeat="role in ::vm.roles track by role.ID"><input type="checkbox" data-checklist-model="institution.Roles" data-checklist-value="role"> {{::role.Name}}</label></div></div></div></div></div></div></uib-tab></uib-tabset></fieldset></form>');
$templateCache.put('angularJs/Apps/Applications/Templates/View.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="/#">Applications</a></li><li class="active">View {{::vm.application.Name}}</li></ol><h1>{{::vm.application.Name}}</h1><table class="table"><thead><tr></tr></thead><tr ng-repeat="event in vm.application.Events track by event.ID"><td>{{::event.Name}}</td><td><ul ng-repeat="tag in event.Tags track by tag.ID">{{::tag.Name}}</ul></td></tr></table><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><a href="#/Home" class="btn btn-default">Back</a></div></div>');
$templateCache.put('angularJs/Apps/Applications/Templates/home.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li class="active">Applications</li></ol><table class="table"><thead><tr></tr></thead><tr ng-repeat="application in vm.applications track by application.ID"><td>{{::application.Name}}</td><td><a href="#/View?id={{::application.ID}}" class="btn btn-default">View</a></td></tr></table>');
$templateCache.put('angularJs/Apps/Account/Templates/Login.html','<div class="container"><div class="row"><div class="col-md-4 center-block"><form class="form-signin"><h2 class="form-signin-heading">Please sign in</h2><label for="inputEmail" class="sr-only">Email address</label><input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus><label for="inputPassword" class="sr-only">Password</label><input type="password" id="inputPassword" class="form-control" placeholder="Password" required><div class="checkbox"><label><input type="checkbox" value="remember-me"> Remember me</label></div><button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button></form></div></div></div>');
$templateCache.put('angularJs/Apps/Account/Templates/View.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="/#">Applications</a></li><li class="active">View {{::vm.application.Name}}</li></ol><h1>{{::vm.application.Name}}</h1><table class="table"><thead><tr></tr></thead><tr ng-repeat="event in vm.application.Events track by event.ID"><td>{{::event.Name}}</td><td><ul ng-repeat="tag in event.Tags track by tag.ID">{{::tag.Name}}</ul></td></tr></table><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><a href="#/Home" class="btn btn-default">Back</a></div></div>');
$templateCache.put('angularJs/Apps/Configuration/Templates/Create.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="#">Roles</a></li><li class="active">Create</li></ol><role-form></role-form>');
$templateCache.put('angularJs/Apps/Configuration/Templates/Edit.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="#">Roles</a></li><li class="active">Edit</li></ol><role-form></role-form>');
$templateCache.put('angularJs/Apps/Configuration/Templates/home.html','<div class="page-header"><h3>Search Index Administration</h3></div><p class="text-info">There are currently {{vm.numberOfRecords}} documents indexed in the search engine.</p><h4>Reindex Documents</h4><p class="text-warning">Please only use the settings below if you know what you\'re doing.</p><p>Reindexing the search engine will clear all records and will recreate the entire index - this can be time consuming.</p><div class="row"><div class="col-lg-3"><div class="well"><h4>Reindex</h4><p style="font-size: smaller">Clicking the button below will reindex the selected search documents.</p><ul ng-repeat="item in vm.searchable" style="list-style-type: none; padding: 0; margin: 0"><li><div class="checkbox"><label><input type="checkbox" ng-model="item.Checked"><span ng-bind="item.Name"></span></label><i class="glyphicon glyphicon-ok" style="color: #5CB85C" ng-show="item.Success"></i></div></li></ul><button class="btn btn-primary" ng-click="vm.doReindex()" ng-disabled="disableButton">Reindex</button><div style="margin-top: 20px"><label><input type="checkbox" ng-model="advancedOptions"> Advanced Options</label></div><div ng-show="advancedOptions"><p class="text-warning">Only use these options if you are sure you know what you\'re doing!</p><button ng-click="vm.deleteSearchRecords()" class="btn btn-warning">Delete All Search Records</button></div></div><a href="/Admin/Settings/SearchSettings" class="btn btn-default">Back</a></div></div>');
$templateCache.put('angularJs/Apps/Notifications/Templates/create.html','<div class="page-header"><h2>{{vm.application.Name}} <small>{ {{vm.Event.FriendlyName}} }</small></h2><small ng-bind-html="vm.details | sanitize"></small></div><notification-form back-route="notifications.home"></notification-form>');
$templateCache.put('angularJs/Apps/Notifications/Templates/edit.html','<div class="page-header"><h2>{{vm.application.Name}} <small>{ {{vm.Notification.GeneratedBy.FriendlyName}} }</small></h2><small ng-bind-html="vm.details | sanitize"></small></div><notification-form back-route="notifications.home"></notification-form>');
$templateCache.put('angularJs/Apps/Notifications/Templates/home.html','<notifications></notifications><div class="btn-group"><select class="form-control" ng-options="application as application.Name for application in filtered = (vm.applications | filter:application.Events.length > 0)" ng-model="vm.selectedApplication"><option value="">Select an application</option></select></div><div class="btn-group"><select class="form-control" ng-disabled="vm.selectedApplication == undefined" ng-options="event as event.FriendlyName for event in vm.selectedApplication.Events" ng-model="vm.selectedEvent" ng-change="vm.getNotifications(vm.selectedApplication.ID, vm.selectedEvent.ID)"><option value="">Select an event</option></select></div><div ng-show="vm.notifications"><div class="page-header"><h2>{{vm.selectedApplication.Name}} <small>{ {{vm.selectedEvent.FriendlyName}} }</small></h2><small ng-bind-html="vm.details | sanitize"></small></div><div class="panel panel-default"><div class="panel-heading clearfix">Notifications <a ui-sref="notifications.create({appID:vm.selectedApplication.ID,eventID: vm.selectedEvent.ID})" class="btn btn-default pull-right">Create Notification</a></div><div class="panel-body"><table class="table table-striped table-hover table-condensed"><thead><tr></tr><tr></tr><tr></tr><tr></tr></thead><tr ng-repeat="notification in vm.notifications track by notification.ID"><td><span class="label label-info">Email</span></td><td>{{::notification.Subject}}</td><td><a ui-sref="notifications.edit({id:notification.ID, appID:vm.selectedApplication.ID, eventID:vm.selectedEvent.ID})" class="btn btn-default btn-sm">Edit</a></td><td><button ng-click="vm.delete(notification)" class="btn btn-danger btn-sm">Delete</button></td></tr></table></div></div></div>');
$templateCache.put('angularJs/Apps/Roles/Templates/create.html','<role-form back-route="roles.home"></role-form>');
$templateCache.put('angularJs/Apps/Roles/Templates/edit.html','<role-form back-route="roles.home"></role-form>');
$templateCache.put('angularJs/Apps/Roles/Templates/home.html','<notifications></notifications><a ui-sref="roles.create" class="btn btn-default">Create Role</a><table class="table" show-errors-no-form><thead><tr><th><a ng-click="vm.reorder(\'name\')">name <span ng-class="vm.getGlyphClass(\'name\')" aria-hidden="true"></span></a></th><th></th><th></th><th></th></tr></thead><tr ng-repeat="role in vm.roles"><td>{{::role.Name}}</td><td><span class="label label-info">{{::role.NumberOfUses}}</span></td><td><a ui-sref="roles.edit({id:{{::role.ID}}})" class="btn btn-default">Edit</a></td><td><button ng-really-message="Are you sure ?" ng-really-click="vm.reallyDelete(role)" class="btn btn-danger">Delete</button></td></tr></table><uib-pagination total-items="vm.query.TotalNumberOfResults" ng-model="vm.query.StartAt" ng-change="vm.pageChanged()" items-per-page="vm.query.PageSize" class="pagination-sm" boundary-links="true"></uib-pagination>');
$templateCache.put('angularJs/Apps/Institutions/Templates/Create.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="#">Institutions</a></li><li class="active">Create</li></ol><notifications></notifications><institution-form></institution-form>');
$templateCache.put('angularJs/Apps/Institutions/Templates/Edit.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="#">Institutions</a></li><li class="active">Edit</li></ol><notifications></notifications><institution-form></institution-form>');
$templateCache.put('angularJs/Apps/Institutions/Templates/home.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="#" class="active">Institutions</a></li></ol><a href="#/Create" class="btn btn-default">Create Institution</a><table class="table"><thead><tr></tr></thead><tr ng-repeat="institution in vm.institutions track by institution.ID"><td>{{::institution.Name}}</td><td><a href="#/Edit?id={{::institution.ID}}" class="btn btn-default">Edit</a></td><td><button ng-click="vm.delete(institution)" class="btn btn-danger">Delete</button></td></tr></table>');
$templateCache.put('angularJs/Apps/Users/Templates/create.html','<user-form back-route="users.home"></user-form>');
$templateCache.put('angularJs/Apps/Users/Templates/edit.html','<user-form back-route="users.home"></user-form>');
$templateCache.put('angularJs/Apps/Users/Templates/home.html','<notifications></notifications><a ui-sref="users.create" class="btn btn-default">Create User</a><table class="table" ng-cloak><thead><tr><th><a ng-click="vm.reorder(\'username\')">username <span ng-class="vm.getGlyphClass(\'username\')" aria-hidden="true"></span></a></th><th><a ng-click="vm.reorder(\'forename\')">forename</a> <span ng-class="vm.getGlyphClass(\'forename\')" aria-hidden="true"></span></th><th><a ng-click="vm.reorder(\'surname\')">surname</a> <span ng-class="vm.getGlyphClass(\'surname\')" aria-hidden="true"></span></th><th><a ng-click="vm.reorder(\'email\')">email</a> <span ng-class="vm.getGlyphClass(\'email\')" aria-hidden="true"></span></th><th></th></tr></thead><tr ng-repeat="user in vm.users track by user.Username"><td>{{::user.Username}}</td><td>{{::user.Forename}}</td><td>{{::user.Surname}}</td><td>{{::user.Email}}</td><td><a ui-sref="users.edit({id:{{::user.ID}}})" class="btn btn-default">Edit</a></td></tr></table><uib-pagination total-items="vm.query.TotalNumberOfResults" ng-model="vm.query.StartAt" ng-change="vm.pageChanged()" items-per-page="vm.query.PageSize" class="pagination-sm" boundary-links="true"></uib-pagination>');}]);