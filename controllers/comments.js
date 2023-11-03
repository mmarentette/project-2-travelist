const Destination = require('../models/destination');
const user = require('../models/user');

module.exports = {
    create,
    delete: deleteComment
};

async function create(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.destId);
        const sight = destinationDoc.sights.id(req.params.sightId);
        const comment = req.body;
        comment.userId = req.user._id;
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

async function deleteComment(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.destId);
        const sight = destinationDoc.sights.id(req.params.sightId);
        if (!sight.comments._id === req.user._id) res.redirect(`/destinations/${destinationDoc._id}/sights/${sight._id}`);
        sight.comments.remove(req.params.commentId);
        await destinationDoc.save();
        res.redirect(`/destinations/${destinationDoc._id}/sights/${sight._id}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
