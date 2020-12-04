import { ObjectID } from "mongodb";
import mongoose from "mongoose";

const mongoose = require('mongoose');

const LobbySchema = mongoose.Schema({ 
    id: {
        type: ObjectId,
        required: true
    }, 
    players: {
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
}, { collection: "Lobbies"});

module.exports = mongoose.model('Lobby', LobbySchema);