Polls = new Mongo.Collection('polls');

Polls.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
});

PollOptions = new SimpleSchema ({
	_id: {
		type: String,
		autoValue: function() {
			if (this.isInsert)
				return new Mongo.ObjectID()._str;
		},
		autoform: {
	        type: "hidden"
	    }
	},
	option: {
		type: String,
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
		label: "QUESTION"
	},
	options: {
		type: [PollOptions]
	},
	tags: {
		type: String,
		label: "tags"
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
	},
	voters: {
		type: [String],
		defaultValue: [],
		minCount: 0,
		autoform: {
			type: "hidden"
		}
	}	
}); 

Polls.attachSchema(PollSchema);