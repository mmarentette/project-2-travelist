const Destination = require('../models/destination');

module.exports = {
    index,
    new: newDestination,
    create,
    show
};

async function index(req, res) {
    try {
        const destinationDocs = await Destination.find({});
        res.render('destinations/index', 
        {
            destinations: destinationDocs
        });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

function newDestination(req, res) {
    res.render('destinations/new');
}

async function create(req, res) {
    try {
        const destinationDoc = await Destination.create(req.body);
        destinationDoc.userId = req.user._id;
        destinationDoc.save();
        res.redirect('/destinations');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

async function show(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.id);
        res.render('destinations/show', 
        {
            destination: destinationDoc
        });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
