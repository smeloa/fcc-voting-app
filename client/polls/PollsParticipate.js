Template.PollParticipate.events({
    'click .vote': function(event, template) {

        event.preventDefault();
        var userID = Meteor.user
        var pollID = this._id;
        var voteID = template.$("input:checked").val();

        Meteor.call('updateVotes', pollID, voteID, function(error, result) {
            console.log(error, result);
        });

        Meteor.call('registerVote', pollID, voteID, function(error, result) {
            console.log(error, result);
        });
    }
});