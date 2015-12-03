Template.PollParticipate.events({
    'click .vote': function(event) {
        
        event.preventDefault();

        var target = $(event.target);

        var pollID = $(this).parent('.poll-card').data('id');
        var voteID = $(this).data('id');
        
        var voteString = 'options.' + voteID + '.votes';
        var action = {};
        action[voteString] = 1;
        
        Polls.update(
            {_id: pollID},
            {$inc: action}
        );
    }
});