const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({ // Need to add id and stats?
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: {      //Should make this friends ID
        type: [String]
    },
    friendRequests: {
        type: [String]
    },
    public: {
        type: Boolean
    },
    gamesPlayed: {
        type: Number
    },
    winRate: {
        type: Number
    },
    wins: {
        type: Number
    },
    currentGames: [{type: mongoose.Schema.Types.ObjectId, ref: "Game"}],
    previousGames: [{type: mongoose.Schema.Types.ObjectId, ref: "Game"}]
    
}, { collection: "users"});

module.exports = mongoose.model('User', UserSchema);
