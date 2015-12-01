if(Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('my-polls');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});

	Accounts.ui.config({
	  passwordSignupFields: 'USERNAME_ONLY'
	});
}

FlowRouter.triggers.enter([function(context, redirect) {
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('my-polls');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/my-polls', {
	name: 'my-polls',
	action() {
		BlazeLayout.render('MainLayout', {main: 'MyPolls'});
	}
});

FlowRouter.route('/create-polls', {
	name: 'create-polls',
	action() {
		BlazeLayout.render('MainLayout', {main: 'CreatePolls'});
	}
});

FlowRouter.route('/do-polls', {
	name: 'do-polls',
	action() {
		BlazeLayout.render('MainLayout', {main: 'DoPolls'});
	}
});

FlowRouter.route('/polls-done', {
	name: 'polls-done',
	action() {
		BlazeLayout.render('MainLayout', {main: 'PollsDone'});
	}
});

