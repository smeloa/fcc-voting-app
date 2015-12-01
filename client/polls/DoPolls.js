Template.DoPolls.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('polls');
	});
});

Template.DoPolls.helpers({
	polls: function() {
		return Polls.find({});
	}
})