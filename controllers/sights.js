const Destination = require('../models/destination');

module.exports = {
    new: newSight,
    create
}

async function newSight(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.id);
        res.render('sights/new', {
            destination: destinationDoc
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

async function create(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.id);
        sight = req.body;
        sight.userRecommending = req.user;
        destinationDoc.sights.push(sight);
        await destinationDoc.save();
        res.redirect(`/destinations/${destinationDoc._id}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}