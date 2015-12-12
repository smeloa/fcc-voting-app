Template.PollParticipate.events({
    'click .vote': function(event, template) {
        
        event.preventDefault();

        var pollID = this._id;
        console.log(pollID);
        var voteID = template.$("input:checked").val();
        console.log(voteID);
        console.log(this);

        Meteor.call('updateVotes', pollID, voteID, function(error, result) {
            console.log(error, result);
        });

    }
});