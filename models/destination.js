const mongoose = require('mongoose');

const sightSchema = new mongoose.Schema(
    {
        name: String,
        photo: String,
        addess: String,
        description: String,
        topActivity: Boolean,
        userRecommending: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
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