const Destination = require('../models/destination');

module.exports = {
    new: newSight
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