const express = require('express');
const router = express.Router();
const User = require("../models/User")

router.post('/', (req, res) => {
    User.findOne({ username: req.body.username, password: req.body.password }, function(err, user) {
        if (err) throw err;

        if (user) {     //USER EXISTS
            res.status(200).json(user)
        } else {
            res.sendStatus(404)
        }
    });
});

module.exports = router;