const Destination = require('../models/destination');

module.exports = {
    create
};

async function create(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.destId);
        const sight = destinationDoc.sights.id(req.params.sightId);
        console.log(req.body, '<-------------- Comment content: req.body');
        const comment = req.body;
        comment.user = req.user._id;
        comment.userName = req.user.name;
        comment.userAvatar = req.user.avatar;
        sight.comments.push(comment);
        await destinationDoc.save();
        res.redirect(`/destinations/${destinationDoc._id}/sights/${sight._id}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

// Cable car was a bit scary, but totally worth the view from the top!