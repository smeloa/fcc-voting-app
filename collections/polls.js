Polls = new Mongo.Collection('polls');

Polls.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

PollOptions = new SimpleSchema ({
	option: {
		type: String,
		label: "Name"
	},
	votes: {
		type: Number,
		min: 0,
		autoform: {
			type: "hidden"
		}
	}
});

PollSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	description: {
		type: String,
		label: "Description"
	},
	options: {
		type: [PollOptions]
	},
	tags: {
		type: String,
		label: "tags"
	},
	particpatedIn: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}	
}); 

Polls.attachSchema(PollSchema);