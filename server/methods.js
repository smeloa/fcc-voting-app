Meteor.methods({
	updateVotes: function(pollID, voteID) {
		return Polls.update({
            _id: pollID,
            options: {
                $elemMatch: {
                    _id: voteID
                }
            }
        }, {
            $inc: {
                'options.$.votes': 1
            }
        });
	}
});