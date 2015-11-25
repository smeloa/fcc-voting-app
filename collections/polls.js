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
		label: "Option"
	},

	votes: {
	    type: Number,
	    min: 0,
	    autoValue: function() {
	        return 0;
	    },
	    autoform: {
	        type: "hidden"
	    }
	}
});

PollSchema = new SimpleSchema({
	question: {
		type: String,
		label: "Question"
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