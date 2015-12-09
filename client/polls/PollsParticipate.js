Template.PollParticipate.events({
    'click .vote': function(event, template) {
        
        event.preventDefault();

        var pollID = this._id;
        console.log(pollID);
        var voteID = template.$("input:checked").val();
        console.log(voteID);

        Polls.update({
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

Meteor.methods({
    updateVote: function(event, template) {

    }
})