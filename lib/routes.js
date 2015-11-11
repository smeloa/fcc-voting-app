FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/my-polls', {
	name: 'my-polls',
	action() {
		BlazeLayout.render('MainLayout', {main: 'MyPolls'});
	}
});

FlowRouter.route('/polls-done', {
	name: 'polls-done',
	action() {
		BlazeLayout.render('MainLayout', {main: 'PollsDone'});
	}
});

FlowRouter.route('/poll/:id', {
	name: 'poll-single',
	action() {
		BlazeLayout.render('MainLayout', {main: 'PollSingle'});
	}
});