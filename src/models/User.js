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
    }
}, { collection: "users"});

module.exports = mongoose.model('User', UserSchema);