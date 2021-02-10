const express = require('express');
const router = express.Router();
const User = require("../models/User");

router.post('/', (req, res) => {
    User.findOne({ username: req.body.username}, function(err, user) {
        if (err) throw err;

        if (user) {     //USER EXISTS
            let username = user.username;
            let username1 = this.username;
            User.updateOne({username: username1}, {$push: {friends: username}});
        } else {
            res.sendStatus(404)
        }
    });
});

module.exports = router;
