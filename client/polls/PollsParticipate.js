Template.PollParticipate.events({
    'click .vote': function(event) {
        
        event.preventDefault();
        
        var pollID = $(event.currentTarget).parent('.poll-card').data('id');
        console.log(pollID);
        var voteID = $(event.currentTarget).data('id');
        console.log(voteID);
        
        var voteString = 'options.' + voteID + '.votes';
        var action = {};
        action[voteString] = 1;
        
        Polls.update(
            {_id: pollID},
            {$inc: action}
        );
    }
});