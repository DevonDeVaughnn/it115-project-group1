//since we are creating a router, we must tell express that's what we're doing
const router = require("express").Router();
//pull the schema from the models
let User = require("../models/user.model");

//finding the user model
//first endpoint
router.route("/").get((req, res) => {
  //find user then send the result  of users in a json format
  User.find()
    .then((users) => res.json(users))
    //handle errors if there are any
    .catch((err) => res.status(400).json("Error: " + err));
});

//function to add a new user
router.route("/add").post((req, res) => {
  //assigning user input as the const username
  const username = req.body.username;
  const newUser = new User({ username });

  //save new user to database or send an error if it is unable to
  newUser
    .save()
    .then(() => res.json("User added!"))
    //handle errors if there are any
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
