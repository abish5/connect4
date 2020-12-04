import mongoose from "mongoose";

const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({ 
    id: {
        type: ObjectId,
        required: true
    },
    user_1_id: {
        type: ObjectId,
        required: true
    },
    user_2_id: {
        type: ObjectId,
        required: true
    },
    winner: {
        type: String,
        required: true
    },
    current_turn: {         //Current turn red or yellow
        type: String,
        required: true
    },
}, { collection: "games"});

module.exports = mongoose.model('User', GameSchema);