Meteor.publish('polls', function() {
	return Recipes.find({})
});