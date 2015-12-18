Template.PollParticipate.events({
    'click .vote': function(event, template) {

        event.preventDefault();
        var userID = Meteor.userId();
        var pollID = this._id;
        var voteID = template.$("input:checked").val();

        Meteor.call('updateVotes', pollID, voteID, userID, function(error, result) {
            console.log(error, result);
        });
    }
});