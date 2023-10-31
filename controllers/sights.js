const Destination = require('../models/destination');

module.exports = {
    new: newSight,
    create,
    show
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

async function show(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.destId);
        console.log(destinationDoc, '<---------- destinationDoc');
        const sight = await destinationDoc.sights.id(req.params.sightId);
        console.log(sight, '<--------- sight');
        res.render('sights/show', {
            destination: destinationDoc,
            sight
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}