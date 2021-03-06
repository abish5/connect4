const express = require('express');
const router = express.Router();
const User = require("../models/User")

router.get('/', (req, res) => {
    res.send('We are on signup');
});

router.post('/', (req, res) => {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    // if(!User.findOne({ username: req.body.username})) {
        user.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.json({ message: err });
        })
    // } else{
    //     res.status(409);
    //     res.json({ message: "Username already exists"})
    // }
})

module.exports = router;