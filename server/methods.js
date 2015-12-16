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
	},
    registerVote: function(pollID, voteID) {
        console.log('Hello ' + this.userId);
        return Votes.update({
            _id: {
                $elemMatch: {
                    _id: this.userId
                }
            }    
        }, {
            $push:{
                _id: this.userId,
               'pollandvote.$.poll': pollID,
               'pollandvote.$.option': voteID
            }        
        });
    }
    // registerVote: function(pollID, voteID) {
    //     console.log('Hello ' + this.userId);
    //     return Votes.update({
    //         _id: {
    //             $elemMatch: {
    //                 _id: this.userId
    //             }
    //         }    
    //     }, {
    //         $push:{
    //             _id: this.userId
    //            'pollandvote.$.poll': pollID,
    //            'pollandvote.$.option': voteID
    //         }        
    //     });
    // }
});