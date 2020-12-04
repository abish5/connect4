import mongoose from "mongoose";

const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({ // Need to add id and stats?
    player: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    detail: {
        type: String,
        required: true
    },

}, { collection: "games"});

module.exports = mongoose.model('User', GameSchema);