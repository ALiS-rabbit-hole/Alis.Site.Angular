angular.module('templatescache', []).run(['$templateCache', function($templateCache) {$templateCache.put('angularJs/Templates/_addressForm.html','<div class="form-group" show-errors><label for="Name" class="col-sm-2 control-label">Friendly Name</label><div class="col-sm-10"><input type="text" class="form-control" name="Name" id="Name" placeholder="Name" ng-required ng-model="$parent.Address.Name"> <span class="help-block" ng-show="Address.Name.$invalid">{{Address.Name.$errorText}}</span></div></div><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Address 1</label><div class="col-sm-10"><input type="text" class="form-control" name="Address1" id="Address1" placeholder="Address 1" ng-required ng-model="$parent.Address.Address1"> <span class="help-block" ng-show="Address.Address1.$invalid">{{Address.Address1.$errorText}}</span></div></div><div class="form-group" show-errors><label for="Address2" class="col-sm-2 control-label">Address 2</label><div class="col-sm-10"><input type="text" class="form-control" name="Address2" id="Address2" placeholder="Address 2" ng-required ng-model="$parent.Address.Address2"> <span class="help-block" ng-show="Address.Address2.$invalid">{{Address.Address2.$errorText}}</span></div></div><div class="form-group" show-errors><label for="Town" class="col-sm-2 control-label">Town</label><div class="col-sm-10"><input type="text" class="form-control" name="Town" id="Town" placeholder="Town" ng-required ng-model="$parent.Address.Town"> <span class="help-block" ng-show="Address.Town.$invalid">{{Address.Town.$errorText}}</span></div></div><div class="form-group" show-errors><label for="Address2" class="col-sm-2 control-label">County</label><div class="col-sm-10"><input type="text" class="form-control" name="County" id="County" placeholder="County" ng-required ng-model="$parent.Address.County"> <span class="help-block" ng-show="Address.County.$invalid">{{Address.County.$errorText}}</span></div></div><div class="form-group" show-errors><label for="Address2" class="col-sm-2 control-label">Postcode</label><div class="col-sm-10"><input type="text" class="form-control" name="Postcode" id="Postcode" placeholder="Postcode" ng-required ng-model="$parent.Address.Postcode"> <span class="help-block" ng-show="Address.Postcode.$invalid">{{Address.Postcode.$errorText}}</span></div></div>');
$templateCache.put('angularJs/Templates/_angularAppMenu.html','<nav class="navbar navbar-default" role="navigation" ng-show="visible"><div class="container"><div class="topbar"><ul class="list-inline top-nav"><li><a href="#">Help</a></li><li><a href="#">Support</a></li></ul><div class="searchbox"><form method="post"><div class="input-group input-group-sm"><input type="text" class="form-control" placeholder="search ..."> <span class="input-group-btn"><button class="btn btn-default" type="button"><i class="fa fa-search"></i></button></span></div></form></div></div><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span> <i class="fa fa-bars"></i></button> <a ui-sref="users.home" class="navbar-brand navbar-logo navbar-logo-bigger"></a></div><div id="navbar" class="navbar-collapse collapse navbar-mega-menu"><ul class="nav navbar-nav navbar-right"><li><a ui-sref="users.home">Users</a></li><li><a ui-sref="rooms.home">Rooms</a></li><li><a ui-sref="roles.home">Roles</a></li><li><a ui-sref="institutions.home">Institutions</a></li><li><a ui-sref="applications.home">Applications</a></li><li><a ui-sref="groups.home">Groups</a></li><li><a ui-sref="notifications.home">Notifications</a></li><li><a ui-sref="configuration.home">Configuration</a></li><li><a ui-sref="account.login">Account</a></li></ul></div></div></nav>');
$templateCache.put('angularJs/Templates/_changePasswordForm.html','<notifications></notifications><form name="changePasswordForm" class="form-horizontal"><div class="form-group" show-errors><label for="newPassword" class="col-sm-2 control-label">New Password</label><div class="col-sm-10"><input type="password" class="form-control" id="newPassword" name="NewPassword" placeholder="New Password" ng-required ng-model="vm.ChangePasswordWithToken.NewPassword"> <span class="help-block" ng-show="changePasswordForm.NewPassword.$invalid">{{changePasswordForm.NewPassword.$errorText}}</span></div></div><div class="form-group" show-errors><label for="newPasswordRetype" class="col-sm-2 control-label">Retpe Password</label><div class="col-sm-10"><input type="password" class="form-control" id="newPasswordRetype" name="NewPasswordRetype" placeholder="Retype Password" ng-required ng-model="vm.ChangePasswordWithToken.NewPasswordRetype"> <span class="help-block" ng-show="changePasswordForm.NewPasswordRetype.$invalid">{{changePasswordForm.NewPasswordRetype.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save Password</button> <a class="btn btn-warning" ng-href="{{back}}">Cancel</a></div></div></form>');
$templateCache.put('angularJs/Templates/_groupForm.html','<notifications></notifications><form name="groupForm" class="form-horizontal"><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Name</label><div class="col-sm-10"><input type="text" class="form-control" id="name" name="Name" placeholder="Group Name" ng-required ng-model="vm.group.Name"> <span class="help-block" ng-show="groupForm.Name.$invalid">{{groupForm.Name.$errorText}}</span></div></div><div class="form-group"><label for="creator" class="col-sm-2 control-label">Creator</label><div class="col-sm-10"><input type="text" class="form-control" id="creator" name="Creator" placeholder="Room Name" disabled="disabled" value="{{::vm.group.Creator.Forename}} {{::vm.group.Creator.Surname}}"></div></div><div class="form-group" show-errors><label for="description" class="col-sm-2 control-label">Description</label><div class="col-sm-10"><textarea type="text" class="form-control" id="description" name="Description" ng-required ng-model="vm.group.Description"></textarea><span class="help-block" ng-show="groupForm.Description.$invalid">{{groupForm.Description.$errorText}}</span></div></div><div class="form-group"><label class="col-sm-2 control-label">Members</label><div class="col-sm-5"><div class="panel panel-default"><div class="panel-body"><ul class="list-group"><li ng-repeat="user in vm.group.Members" class="list-group-item">{{::user.Forename}} {{::user.Surname}} <button class="btn btn-xs btn-default pull-right" ng-click="vm.removeMember(user)">Remove</button></li></ul></div></div></div><div class="col-sm-5"><user-list selected-users="vm.group.Members"></user-list></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a class="btn btn-warning" ng-href="{{back}}">Cancel</a></div></div></form>');
$templateCache.put('angularJs/Templates/_institutionForm.html','<notifications></notifications><form name="institutionForm" class="form-horizontal"><fieldset><uib-tabset active="activeForm"><uib-tab index="0" heading="Details"><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Name</label><div class="col-sm-10"><input type="text" class="form-control" id="name" name="Name" placeholder="Institution Name" ng-required ng-model="vm.institutionConfig.Institution.Name"> <span class="help-block" ng-show="institutionForm.Name.$invalid">{{institutionForm.Name.$errorText}}</span></div></div><div class="form-group" show-errors><label for="abbreviation" class="col-sm-2 control-label">Abbreviation</label><div class="col-sm-10"><input type="text" class="form-control" id="abbreviation" name="Abbreviation" placeholder="Abbreviation" ng-required ng-model="vm.institutionConfig.Institution.Abbreviation"> <span class="help-block" ng-show="institutionForm.Abbreviation.$invalid">{{institutionForm.Abbreviation.$errorText}}</span></div></div></uib-tab><uib-tab index="1" heading="Configuration"><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="panel panel-default"><div class="panel-heading">Room Types</div><div class="panel-body"><label class="checkbox-inline" ng-repeat="type in ::vm.roomTypes track by type.ID"><input type="checkbox" data-checklist-model="vm.institution.RoomTypes" data-checklist-value="type"> {{::type.Name}}</label></div></div></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="panel panel-default"><div class="panel-heading clearfix">Room Type Variants</div><div class="panel-body"><div class="well well-sm" ng-repeat="type in vm.institution.RoomTypes"><h4>{{type.Name}} <button class="btn btn-xs btn-info pull-right">Add</button></h4><div><div class="form-group"><label for="typeVariant" class="col-sm-2 control-label">Type Variant</label><div class="col-sm-5"><input type="text" class="form-control" id="typeVariant" name="TypeVariant" placeholder="Variant Name" ng-model="type.Name"></div><div class="col-sm-3"><input type="text" class="form-control" id="typeVariantAbbrev" name="TypeVariantAbbrev" placeholder="Variant Abbreviation" ng-model="type.Abbreviation"></div><div class="col-sm-2"><button ng-click="" class="btn btn-danger btn-sm">Remove</button></div></div></div></div></div></div></div></div></uib-tab></uib-tabset><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a ng-href="{{back}}" class="btn btn-warning">Cancel</a></div></div></fieldset></form>');
$templateCache.put('angularJs/Templates/_notificationForm.html','<notifications></notifications><div class="row"><div class="col-md-9"><form name="notificationForm" class="form-horizontal"><div class="form-group" show-errors><label for="from" class="col-sm-2 control-label">From</label><div class="col-sm-7"><input type="text" class="form-control" id="from" name="From" ng-disabled="vm.overrideFrom != \'Override\'" placeholder="From" ng-required ng-model="vm.Notification.From"> <span class="help-block" ng-show="notificationForm.From.$invalid">{{notificationForm.From.$errorText}}</span></div><div class="col-sm-3"><button type="button" class="btn btn-default" ng-model="vm.overrideFrom" uib-btn-checkbox btn-checkbox-true="\'Override\'" btn-checkbox-false="\'nope\'">Override</button></div></div><div class="form-group" show-errors><label for="to" class="col-sm-2 control-label">To</label><div class="col-sm-7"><input type="text" class="form-control" id="to" name="to" placeholder="To" ng-required ng-model="vm.Notification.Recipients" ng-disabled="vm.selectedTarget != \'Custom\'"> <span class="help-block" ng-show="notificationForm.Recipients.$invalid">{{notificationForm.Recipients.$errorText}}</span></div><div class="col-sm-3"><div class="btn-group"><select class="form-control" ng-options="target as target for target in vm.Notification.GeneratedBy.Targets" ng-model="vm.selectedTarget"></select></div></div></div><div class="form-group" show-errors><label for="subject" class="col-sm-2 control-label">Subject</label><div class="col-sm-10"><input type="text" class="form-control" id="subject" name="Subject" placeholder="Notifiction Subject" ng-required ng-model="vm.Notification.Subject"> <span class="help-block" ng-show="notificationForm.Subject.$invalid">{{notificationForm.Subject.$errorText}}</span></div></div><div class="form-group" show-errors><label for="message" class="col-sm-2 control-label">Message</label><div class="col-sm-10"><textarea class="form-control" id="message" name="Message" placeholder="Message" ng-required ng-model="vm.Notification.Message" mark-it-up></textarea><span class="help-block" ng-show="notificationForm.Message.$invalid">{{notificationForm.Message.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a class="btn btn-warning" ng-href="{{back}}?appID={{::vm.appID}}&eventID={{::vm.eventID}}">Back</a></div></div></form></div><div class="col-md-3"><div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">Tags</h3></div><div class="panel-body"><p ng-repeat="tag in vm.Notification.GeneratedBy.Tags" popover-trigger="focus" popover-placement="top" popover-title="Details" uib-popover="{{tag.Description}}" ng-click="vm.AppendTag(tag)">{{tag.Name}}</p><br></div></div></div></div>');
$templateCache.put('angularJs/Templates/_notifications.html','<div class="alert alert-success fade in" ng-show="notifications.success.valid" role="alert"><a class="close" data-dismiss="alert">&times;</a> <strong>Success</strong><ul><li ng-repeat="description in notifications.success.descriptions">{{description}}</li></ul></div><div class="alert alert-danger fade in" ng-show="notifications.errors.invalid" role="alert"><a class="close" data-dismiss="alert">&times;</a> <strong>Error!</strong><ul><li ng-repeat="description in notifications.errors.descriptions">{{description}}</li></ul></div>');
$templateCache.put('angularJs/Templates/_paging.html','<nav><ul class="pagination"><li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li><li><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul>{{::queryItem.TotalNumberOfResults}}</nav>');
$templateCache.put('angularJs/Templates/_roleForm.html','<notifications></notifications><form name="editRoleForm" class="form-horizontal"><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Edit Role</label><div class="col-sm-10"><input type="text" class="form-control" id="name" name="Name" placeholder="Role Name" ng-required ng-model="vm.role.Name"> <span class="help-block" ng-show="editRoleForm.Name.$invalid">{{editRoleForm.Name.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a class="btn btn-warning" ng-href="{{back}}">Cancel</a></div></div></form>');
$templateCache.put('angularJs/Templates/_roomForm.html','<notifications></notifications><form name="roomForm" class="form-horizontal"><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Name</label><div class="col-sm-10"><input type="text" class="form-control" id="name" name="Name" placeholder="Room Name" ng-required ng-model="vm.room.Name"> <span class="help-block" ng-show="roomForm.Name.$invalid">{{roomForm.Name.$errorText}}</span></div></div><div class="form-group"><label for="creator" class="col-sm-2 control-label">Creator</label><div class="col-sm-10"><input type="text" class="form-control" id="creator" name="Creator" placeholder="Room Name" disabled="disabled" value="{{::vm.room.Creator.Forename}} {{::vm.room.Creator.Surname}}"></div></div><div class="form-group"><label for="institution" class="col-sm-2 control-label">Institution</label><div class="col-sm-10"><input ng-repeat="institution in vm.room.Institutions" type="text" class="form-control" id="institution" name="Institution" disabled="disabled" value="{{::institution.Name}} ({{::institution.Abbreviation}})"></div></div><div class="form-group" show-errors><label for="name" class="col-sm-2 control-label">Password</label><div class="col-sm-10"><input type="text" class="form-control" id="password" name="Password" placeholder="Password" ng-required ng-model="vm.room.Password"> <span class="help-block" ng-show="roomForm.Password.$invalid">{{roomForm.Password.$errorText}}</span></div></div><div class="form-group" show-errors><label for="type" class="col-sm-2 control-label" ng-model="vm.selectedType">Type</label><div class="col-sm-10"><select class="form-control" name="Type" id="type" ng-options="type as type.Name for type in vm.roomTypes track by type.ID" ng-required ng-model="vm.selectedType"><option></option></select><span class="help-block" ng-show="roomForm.Type.$invalid">{{roomForm.Type.$errorText}}</span></div></div><div class="form-group"><label for="typeVariant" class="col-sm-2 control-label">Type Variant</label><div class="col-sm-7"><input type="text" class="form-control" id="typeVariant" name="TypeVariant" placeholder="Variant Name" ng-model="vm.RoomTypeVariant.Name"></div><div class="col-sm-3"><input type="text" class="form-control" id="typeVariantAbbrev" name="TypeVariantAbbrev" placeholder="Variant Abbreviation" ng-model="vm.RoomTypeVariant.Abbreviation"></div></div><div class="form-group"><label class="col-sm-2 control-label">Owners</label><div class="col-sm-4"><ul class="list-group"><li ng-repeat="user in vm.room.Owners" class="list-group-item">{{::user.Forename}} {{::user.Surname}} <button ng-if="user.ID != vm.room.Creator.ID" class="btn btn-xs btn-default pull-right" ng-click="vm.removeOwner(user)">Remove</button></li></ul></div><div class="col-sm-6"><uib-accordion close-others="oneAtATime"><div uib-accordion-group class="panel-default" heading="Add Owners"><user-list selected-users="vm.room.Owners"></user-list></div></uib-accordion></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a class="btn btn-warning" ng-href="{{back}}">Cancel</a></div></div></form>');
$templateCache.put('angularJs/Templates/_userForm.html','<notifications></notifications><form name="userForm" class="form-horizontal"><fieldset><uib-tabset active="activeForm"><uib-tab index="0" heading="Details"><h4>Details</h4><div class="form-group" show-errors><label for="username" class="col-sm-2 control-label">Username</label><div class="col-sm-10"><input type="text" class="form-control" id="username" name="Username" placeholder="Username" ng-required ng-model="vm.user.Username"> <span class="help-block" ng-show="userForm.Username.$invalid">{{userForm.Username.$errorText}}</span></div></div><div class="form-group" show-errors><label for="forename" class="col-sm-2 control-label">Forename</label><div class="col-sm-10"><input type="text" class="form-control" id="forename" name="Forename" placeholder="Forename" ng-required ng-model="vm.user.Forename"> <span class="help-block" ng-show="userForm.Forename.$invalid">{{userForm.Forename.$errorText}}</span></div></div><div class="form-group" show-errors><label for="surname" class="col-sm-2 control-label">Surname</label><div class="col-sm-10"><input type="text" class="form-control" id="surname" name="Surname" placeholder="Surname" ng-required ng-model="vm.user.Surname"> <span class="help-block" ng-show="userForm.Surname.$invalid">{{userForm.Surname.$errorText}}</span></div></div><div class="form-group" show-errors><label for="email" class="col-sm-2 control-label">Email</label><div class="col-sm-10"><input type="text" class="form-control" id="email" name="Email" placeholder="Email" ng-required ng-model="vm.user.Email"> <span class="help-block" ng-show="userForm.Email.$invalid">{{userForm.Email.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="checkbox"><label><input type="checkbox" ng-model="vm.user.Enabled"> Enabled</label></div></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.Save()">Save</button> <a class="btn btn-warning" ng-href="{{back}}">Cancel</a></div></div></uib-tab><uib-tab index="1" heading="Access"><h4>Access</h4><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="panel panel-default"><div class="panel-heading">Roles</div><div class="panel-body"><label class="checkbox-inline" ng-repeat="role in ::vm.roles track by role.ID"><input type="checkbox" data-checklist-model="vm.user.Roles" data-checklist-value="role"> {{::role.Name}}</label></div></div></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="panel panel-default"><div class="panel-heading clearfix">Institutions<div class="btn-group pull-right" uib-dropdown is-open="status.isopen"><button id="single-button" type="button" class="btn btn-default dropdown-toggle" uib-dropdown-toggle ng-disabled="disabled">Add to Institution <span class="caret"></span></button><ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="single-button"><li ng-repeat="institution in vm.institutions | notInArray:vm.user.Institutions:\'ID\'"><a ng-click="vm.addToInstitution(institution)">{{institution.Name}}</a></li></ul></div></div><div class="panel-body"><div class="well well-sm" ng-repeat="institution in vm.user.Institutions"><h4>{{institution.Name}}</h4><button ng-click="vm.removeInstitution(institution)" class="btn btn-danger btn-sm pull-right">Remove</button><div><label class="checkbox-inline" ng-repeat="role in ::vm.roles track by role.ID"><input type="checkbox" data-checklist-model="institution.Roles" data-checklist-value="role"> {{::role.Name}}</label></div></div></div></div></div></div></uib-tab></uib-tabset></fieldset></form>');
$templateCache.put('angularJs/Templates/_userList.html','<table class="table table-condensed table-responsive table-striped" ng-cloak><thead><tr><th><a ng-click="reorder(\'forename\')">forename</a> <span ng-class="getGlyphClass(\'forename\')" aria-hidden="true"></span></th><th><a ng-click="reorder(\'surname\')">surname</a> <span ng-class="getGlyphClass(\'surname\')" aria-hidden="true"></span></th><th><a ng-click="reorder(\'email\')">email</a> <span ng-class="getGlyphClass(\'email\')" aria-hidden="true"></span></th><th></th></tr></thead><tr ng-repeat="user in users | notInArray:selectedUsers:\'ID\'"><td>{{::user.Forename}}</td><td>{{::user.Surname}}</td><td>{{::user.Email}}</td><td><button class="btn btn-sm btn-default" ng-click="pushUser(user)">Select</button></td></tr></table><uib-pagination total-items="query.TotalNumberOfResults" ng-model="query.StartAt" ng-change="pageChanged()" items-per-page="query.PageSize" class="pagination-sm" boundary-links="true"></uib-pagination>');
$templateCache.put('angularJs/Apps/Account/Templates/forgotPassword.html','<notifications></notifications><form name="forgotPasswordForm" class="form-horizontal"><div class="form-group" show-errors><label for="email" class="col-sm-2 control-label">Enter your email</label><div class="col-sm-10"><input type="text" class="form-control" id="email" name="Email" placeholder="email" ng-required ng-model="vm.email"> <span class="help-block" ng-show="forgotPasswordForm.Email.$invalid">{{forgotPasswordForm.Email.$errorText}}</span></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button class="btn btn-default" ng-click="vm.resendPassword()">Resend</button> <a class="btn btn-warning" uis-sref="account.login">Cancel</a></div></div></form>');
$templateCache.put('angularJs/Apps/Account/Templates/login.html','<div class="row"><div class="col-sm-5 col-sm-offset-1 col-lg-4 col-lg-offset-2"><div class="account-box login-box box-with-help"><h1>Log in to your account</h1><form class="form-horizontal" role="form"><div class="form-group"><label for="inputEmail" class="control-label sr-only">Email</label><div class="col-sm-12"><div class="input-group"><span class="input-group-addon"><i class="fa fa-envelope"></i></span> <input type="email" class="form-control" id="inputEmail" placeholder="Email"></div></div></div><div class="form-group"><label for="inputPassword" class="control-label sr-only">Password</label><div class="col-sm-12"><div class="input-group"><span class="input-group-addon"><i class="fa fa-lock"></i></span> <input type="password" class="form-control" id="inputPassword" placeholder="Password"></div></div></div><div class="form-group"><div class="col-sm-12"><label class="fancy-checkbox"><input type="checkbox"> <span>Remember me</span></label></div></div><div class="form-group"><div class="col-xs-7"><button type="submit" ng-click="vm.login()" class="btn btn-primary btn-block"><i class="fa fa-sign-in"></i> Sign in</button></div><div class="col-xs-5 text-right"><a ui-sref="account.forgotPassword"><em>forgot password?</em></a></div></div></form><p><em>Don\'t have an account yet?</em> <a href="register.html"><strong>Sign Up</strong></a></p><button type="button" class="btn btn-link btn-login-help"><i class="fa fa-question-circle" title="Click for help"></i></button></div></div><div class="col-sm-5 col-lg-4"><div class="login-copytext"><h2><i class="fa fa-lock"></i> Secure Login</h2><p>Completely strategize mission-critical human capital before installed base intellectual capital. Proactively fashion ubiquitous architectures and value-added solutions.</p><h2><i class="fa fa-user"></i> We protect your privacy</h2><p>Appropriately customize enabled process improvements via resource maximizing methods of empowerment. Dramatically maintain interactive e-commerce before process-centric resources.</p></div></div></div>');
$templateCache.put('angularJs/Apps/Account/Templates/resetPassword.html','<notifications></notifications><div class="alert alert-info" role="alert" ng-hide="vm.validToken">The change password link has expired</div><div ng-show="vm.validToken"><change-password-form back-route="account.login"></change-password-form></div>');
$templateCache.put('angularJs/Apps/Applications/Templates/home.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li class="active">Applications</li></ol><table class="table"><thead><tr></tr></thead><tr ng-repeat="application in vm.applications track by application.ID"><td>{{::application.Name}}</td><td><a ui-sref="applications.view({id:{{::application.ID}}})" class="btn btn-default">View</a></td></tr></table>');
$templateCache.put('angularJs/Apps/Applications/Templates/view.html','<h1>{{::vm.application.Name}}</h1><table class="table"><thead><tr></tr></thead><tr ng-repeat="event in vm.application.Events track by event.ID"><td>{{::event.Name}}</td><td><ul ng-repeat="tag in event.Tags track by tag.ID">{{::tag.Name}}</ul></td></tr></table><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><a ui-sref="applications.home" class="btn btn-default">Back</a></div></div>');
$templateCache.put('angularJs/Apps/Groups/Templates/create.html','<group-form back-route="groups.home"></group-form>');
$templateCache.put('angularJs/Apps/Groups/Templates/edit.html','<group-form back-route="groups.home"></group-form>');
$templateCache.put('angularJs/Apps/Groups/Templates/home.html','<notifications></notifications><a ui-sref="groups.create" class="btn btn-default">Create Group</a><table class="table" show-errors-no-form><thead><tr><th>Group Name</th><th>Members</th><th></th><th></th></tr></thead><tr ng-repeat="group in vm.groups"><td>{{::group.Name}}</td><td>{{::group.Members.length}}</td><td><a ui-sref="groups.edit({id:{{::group.ID}}})" class="btn btn-default">Edit</a></td><td><button ng-really-message="Are you sure?" ng-really-click="vm.reallyDelete(group)" class="btn btn-danger">Delete</button></td></tr></table>');
$templateCache.put('angularJs/Apps/Institutions/Templates/create.html','<institution-form back-route="institutions.home"></institution-form>');
$templateCache.put('angularJs/Apps/Institutions/Templates/edit.html','<institution-form back-route="users.home"></institution-form>');
$templateCache.put('angularJs/Apps/Institutions/Templates/home.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="#" class="active">Institutions</a></li></ol><a ui-sref="institutions.create" class="btn btn-default">Create Institution</a><table class="table"><thead><tr><th>Name</th><th>Abbreviation</th><th></th><th></th></tr></thead><tr ng-repeat="institution in vm.institutions track by institution.ID"><td>{{::institution.Name}}</td><td>{{::institution.Abbreviation}}</td><td><a ui-sref="institutions.edit({id:{{::institution.ID}}})" class="btn btn-default">Edit</a></td><td><button ng-really-message="Are you sure?" ng-really-click="vm.delete(institution)" class="btn btn-danger">Delete</button></td></tr></table>');
$templateCache.put('angularJs/Apps/Configuration/Templates/Create.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="#">Roles</a></li><li class="active">Create</li></ol><role-form></role-form>');
$templateCache.put('angularJs/Apps/Configuration/Templates/Edit.html','<ol class="breadcrumb"><li><a href="/">Home</a></li><li><a href="#">Roles</a></li><li class="active">Edit</li></ol><role-form></role-form>');
$templateCache.put('angularJs/Apps/Configuration/Templates/home.html','<div class="page-header"><h3>Search Index Administration</h3></div><p class="text-info">There are currently {{vm.numberOfRecords}} documents indexed in the search engine.</p><h4>Reindex Documents</h4><p class="text-warning">Please only use the settings below if you know what you\'re doing.</p><p>Reindexing the search engine will clear all records and will recreate the entire index - this can be time consuming.</p><div class="row"><div class="col-lg-3"><div class="well"><h4>Reindex</h4><p style="font-size: smaller">Clicking the button below will reindex the selected search documents.</p><ul ng-repeat="item in vm.searchable" style="list-style-type: none; padding: 0; margin: 0"><li><div class="checkbox"><label><input type="checkbox" ng-model="item.Checked"><span ng-bind="item.Name"></span></label><i class="glyphicon glyphicon-ok" style="color: #5CB85C" ng-show="item.Success"></i></div></li></ul><button class="btn btn-primary" ng-click="vm.doReindex()" ng-disabled="disableButton">Reindex</button><div style="margin-top: 20px"><label><input type="checkbox" ng-model="advancedOptions"> Advanced Options</label></div><div ng-show="advancedOptions"><p class="text-warning">Only use these options if you are sure you know what you\'re doing!</p><button ng-click="vm.deleteSearchRecords()" class="btn btn-warning">Delete All Search Records</button></div></div><a href="/Admin/Settings/SearchSettings" class="btn btn-default">Back</a></div></div>');
$templateCache.put('angularJs/Apps/Notifications/Templates/create.html','<div class="page-header"><h2>{{vm.application.Name}} <small>{ {{vm.Event.FriendlyName}} }</small></h2><small ng-bind-html="vm.details | sanitize"></small></div><notification-form back-route="notifications.home"></notification-form>');
$templateCache.put('angularJs/Apps/Notifications/Templates/edit.html','<div class="page-header"><h2>{{vm.application.Name}} <small>{ {{vm.Notification.GeneratedBy.FriendlyName}} }</small></h2><small ng-bind-html="vm.details | sanitize"></small></div><notification-form back-route="notifications.home"></notification-form>');
$templateCache.put('angularJs/Apps/Notifications/Templates/home.html','<notifications></notifications><div class="btn-group"><select class="form-control" ng-options="application as application.Name for application in filtered = (vm.applications | filter:application.Events.length > 0)" ng-model="vm.selectedApplication"><option value="">Select an application</option></select></div><div class="btn-group"><select class="form-control" ng-disabled="vm.selectedApplication == undefined" ng-options="event as event.FriendlyName for event in vm.selectedApplication.Events" ng-model="vm.selectedEvent" ng-change="vm.getNotifications(vm.selectedApplication.ID, vm.selectedEvent.ID)"><option value="">Select an event</option></select></div><div ng-show="vm.notifications"><div class="page-header"><h2>{{vm.selectedApplication.Name}} <small>{ {{vm.selectedEvent.FriendlyName}} }</small></h2><small ng-bind-html="vm.details | sanitize"></small></div><div class="panel panel-default"><div class="panel-heading clearfix">Notifications <a ui-sref="notifications.create({appID:vm.selectedApplication.ID,eventID: vm.selectedEvent.ID})" class="btn btn-default pull-right">Create Notification</a></div><div class="panel-body"><table class="table table-striped table-hover table-condensed"><thead><tr></tr><tr></tr><tr></tr><tr></tr></thead><tr ng-repeat="notification in vm.notifications track by notification.ID"><td><span class="label label-info">Email</span></td><td>{{::notification.Subject}}</td><td><a ui-sref="notifications.edit({id:notification.ID, appID:vm.selectedApplication.ID, eventID:vm.selectedEvent.ID})" class="btn btn-default btn-sm">Edit</a></td><td><button ng-really-message="Are you sure ?" ng-really-click="vm.reallyDelete(notification)" class="btn btn-danger btn-sm">Delete</button></td></tr></table></div></div></div>');
$templateCache.put('angularJs/Apps/Rooms/Templates/create.html','<room-form back-route="rooms.home"></room-form>');
$templateCache.put('angularJs/Apps/Rooms/Templates/edit.html','<room-form back-route="rooms.home"></room-form>');
$templateCache.put('angularJs/Apps/Rooms/Templates/home.html','<notifications></notifications><a ui-sref="rooms.create" class="btn btn-default">Create Room</a><table class="table" show-errors-no-form><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tr ng-repeat="room in vm.rooms"><td><span class="label label-info">{{::room.Type.Name}}</span></td><td>{{::room.Name}}</td><td>{{::room.Type.RoomTypeVariant.Name}}</td><td><a ui-sref="rooms.edit({id:{{::room.ID}}})" class="btn btn-default">Edit</a></td></tr></table>');
$templateCache.put('angularJs/Apps/Roles/Templates/create.html','<role-form back-route="roles.home"></role-form>');
$templateCache.put('angularJs/Apps/Roles/Templates/edit.html','<role-form back-route="roles.home"></role-form>');
$templateCache.put('angularJs/Apps/Roles/Templates/home.html','<notifications></notifications><a ui-sref="roles.create" class="btn btn-default">Create Role</a><table class="table" show-errors-no-form><thead><tr><th><a ng-click="vm.reorder(\'name\')">name <span ng-class="vm.getGlyphClass(\'name\')" aria-hidden="true"></span></a></th><th></th><th></th><th></th></tr></thead><tr ng-repeat="role in vm.roles"><td>{{::role.Name}}</td><td><span class="label label-info">{{::role.NumberOfUses}}</span></td><td><a ui-sref="roles.edit({id:{{::role.ID}}})" class="btn btn-default">Edit</a></td><td><button ng-really-message="Are you sure?" ng-really-click="vm.reallyDelete(role)" class="btn btn-danger">Delete</button></td></tr></table><uib-pagination total-items="vm.query.TotalNumberOfResults" ng-model="vm.query.StartAt" ng-change="vm.pageChanged()" items-per-page="vm.query.PageSize" class="pagination-sm" boundary-links="true"></uib-pagination>');
$templateCache.put('angularJs/Apps/Users/Templates/create.html','<user-form back-route="users.home"></user-form>');
$templateCache.put('angularJs/Apps/Users/Templates/edit.html','<user-form back-route="users.home"></user-form>');
$templateCache.put('angularJs/Apps/Users/Templates/home.html','<notifications></notifications><a ui-sref="users.create" class="btn btn-default">Create User</a><table class="table" ng-cloak><thead><tr><th><a ng-click="vm.reorder(\'username\')">username <span ng-class="vm.getGlyphClass(\'username\')" aria-hidden="true"></span></a></th><th><a ng-click="vm.reorder(\'forename\')">forename</a> <span ng-class="vm.getGlyphClass(\'forename\')" aria-hidden="true"></span></th><th><a ng-click="vm.reorder(\'surname\')">surname</a> <span ng-class="vm.getGlyphClass(\'surname\')" aria-hidden="true"></span></th><th><a ng-click="vm.reorder(\'email\')">email</a> <span ng-class="vm.getGlyphClass(\'email\')" aria-hidden="true"></span></th><th></th></tr></thead><tr ng-repeat="user in vm.users track by user.Username"><td>{{::user.Username}}</td><td>{{::user.Forename}}</td><td>{{::user.Surname}}</td><td>{{::user.Email}}</td><td><a ui-sref="users.edit({id:{{::user.ID}}})" class="btn btn-default">Edit</a></td></tr></table><uib-pagination total-items="vm.query.TotalNumberOfResults" ng-model="vm.query.StartAt" ng-change="vm.pageChanged()" items-per-page="vm.query.PageSize" class="pagination-sm" boundary-links="true"></uib-pagination>');}]);