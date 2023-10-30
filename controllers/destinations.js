const Destination = require('../models/destination');

module.exports = {
    index,
    new: newDestination
};

async function index(req, res) {
    try {
        const destinationDocs = await Destination.find({});
        console.log(destinationDocs, '<----------- destinationDocs');
        res.render('destinations/index', 
        {
            destinations: destinationDocs
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

function newDestination(req, res) {
    res.render('destinations/new')
}