Template.PollsDone.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('polls');
	});
});

Template.PollsDone.helpers({
	polls: function() {
		var user = Meteor.userId()
		return Polls.find({voters: {$in:  [ user ] }});
	}
});