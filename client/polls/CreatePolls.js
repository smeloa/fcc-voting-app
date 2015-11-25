Template.CreatePolls.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('polls');
	});
});
