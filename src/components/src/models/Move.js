import mongoose from "mongoose";

const mongoose = require('mongoose');

const MoveSchema = mongoose.Schema({ 
    id: {
        type: ObjectId,
        required: true
    },
    user_id: {
        type: ObjectId,
        required: true
    },
    user_2_id: {
        type: ObjectId,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
}, { collection: "moves"});

module.exports = mongoose.model('Move', MoveSchema);