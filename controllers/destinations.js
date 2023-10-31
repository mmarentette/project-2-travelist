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
        // console.log(destinationDocs, '<----------- destinationDocs');
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

async function create(req, res) {
    // console.log(req.body, '<---------- New Destination form contents');
    try {
        const destinationDoc = await Destination.create(req.body);
        // console.log(destinationDoc, '<------ destinationDoc');
        res.redirect('/destinations');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

async function show(req, res) {
    try {
        const destinationDoc = await Destination.findById(req.params.id);
        console.log(destinationDoc, '<--------- destinationDoc');
        res.render('destinations/show', 
        {
            destination: destinationDoc
        })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}