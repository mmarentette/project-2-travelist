const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        content: String,
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        userName: String,
        userAvatar: String,
    },
    {
        timestamps: true
    }
)

const sightSchema = new mongoose.Schema(
    {
        name: String,
        photo: String,
        address: String,
        description: String,
        comments: [commentSchema],
        userId: {
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
        sights: [sightSchema],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Destination', destinationSchema);