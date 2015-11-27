Template.MyPolls.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('polls');
	});
});

Template.MyPolls.helpers({
	polls: function() {
		return Polls.find({author: Meteor.userId()});
	}
})