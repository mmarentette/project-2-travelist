const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema(
    {
        city: String,
        country: String,
        photo: String,
        language: [String]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Destination', destinationSchema);