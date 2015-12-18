Meteor.methods({
	updateVotes: function(pollID, voteID, userID) {
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
        },  $push: {
                'voters': userID    
            }    
        });
	}
});