const mongoose = require('mongoose');

const sightSchema = new mongoose.Schema(
    {
        name: String,
        photo: String,
        addess: String,
        description: String,
        topActivity: Boolean,
    },
    {
        timestamps: true
    }
)

const destinationSchema = new mongoose.Schema(
    {
        city: String,
        country: String,
        photo: String,
        language: [String],
        sights: [sightSchema]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Destination', destinationSchema);