Votes = new Mongo.Collection('votes');

Votes.allow({
	insert: function(userId, doc) {
		return !!userIdl
	}
});

VotesSchema = new SimpleSchema({
	voter: {
		type: String
	},
	pollandvote: {
		type: [Object]
	},
	"pollandvote.$.poll": {
		type: String
	},
	"pollandvote.$.option": {
		type: String
	}
})