Template.DoPolls.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('polls');
	});
});

Template.DoPolls.helpers({
	polls: function() {
		var user = Meteor.userId()
		return Polls.find({voters: {$ne: user}});
	}
});