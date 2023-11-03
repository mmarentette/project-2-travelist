const destination = require('../models/destination');
const Destination = require('../models/destination');

module.exports = {
    new: newSight,
    create,
    show,
    edit,
    update
}

async function newSight(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.id);
        res.render('sights/new', {
            destination: destinationDoc
        });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

async function create(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.id);
        sight = req.body;
        sight.userId = req.user._id;
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
        const destinationDoc = await Destination.findOne({
            'sights._id': req.params.sightId
        });
        const sight = destinationDoc.sights.id(req.params.sightId);
        res.render('sights/show', {
            destination: destinationDoc,
            sight
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

async function edit(req, res) {
    try {
        const destinationDoc = await Destination.findOne({
            'sights._id': req.params.sightId
        });
        const sight = destinationDoc.sights.id(req.params.sightId);
        res.render('sights/edit', {
            destination: destinationDoc,
            sight
        });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

async function update (req, res) {
    try {
        const destinationDoc = await Destination.findOne({
            'sights._id': req.params.sightId
        });
        const sight = destinationDoc.sights.id(req.params.sightId);
        if (!sight.userId.equals(req.user._id)) return res.redirect(`/sights/${sight._id}`);
        // Cool way to update a subdoc without having to individually re-assign all the properties from form:
        sight.set(req.body);
        await destinationDoc.save();
        res.redirect(`/sights/${sight._id}`);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
