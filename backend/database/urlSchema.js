const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true
    },
    hashedUrl: {
        type: String
    },
    clicks: {
        type: Number,
        default: 0
    },
    maxClicks: {
        type: Number,
        default: Infinity

    },
    expiresAt: {
        type: Date,
        default: null
    }
});

module.exports=mongoose.model('UrlModel',urlSchema);
