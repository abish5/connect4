const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({ // Need to add id and stats?
    players: 
        [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    active: {
        type: Boolean,
        required: true
    },
    detail: {
        type: String,
    },
    board: {
        type: [[Number]]
    },
    winner: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    turn: {
        type: Number
    }

}, { collection: "games"});

module.exports = mongoose.model('Game', GameSchema);
