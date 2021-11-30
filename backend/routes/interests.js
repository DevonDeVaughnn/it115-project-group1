//since we are creating a router, we must tell express that's what we're doing
const router = require("express").Router();
//pull the schema from the models
let Interest = require("../models/interest.model");

//finding the interest model
//first endpoint
router.route("/").get((req, res) => {
  //find interest then send the result  of interests in a json format
  Interest.find()
    .then((interests) => res.json(interests))
    //handle errors if there are any
    .catch((err) => res.status(400).json("Error: " + err));
});

//function to add a new user
router.route("/add").post((req, res) => {
  //assigning user input as the const username
  const username = req.body.username;
  const favSong = req.body.favSong;
  const favColor = req.body.favColor;
  const favFood = req.body.favFood;
  const favNumber = Number(req.body.favNumber);

  const newInterests = new Interest({
    username,
    favSong,
    favColor,
    favFood,
    favNumber,
  });

  //save new user to database or send an error if it is unable to
  newInterests
    .save()
    .then(() => res.json("Interests added!"))
    //handle errors if there are any
    .catch((err) => res.status(400).json("Error: " + err));
});

//getting individual interests
router.route("/:id").get((req, res) => {
  Interest.findById(req.params.id)
    .then((interest) => res.json(interest))
    .catch((err) => res.status(400).json("Error: " + err));
});

//deleting interests
router.route("/:id").delete((req, res) => {
  Interest.findByIdAndDelete(req.params.id)
    .then(() => res.json("Interest deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//updating interest
router.route("/update/:id").post((req, res) => {
  Interest.findById(req.params.id).then((interest) => {
    interest.username = req.body.username;
    interest.favSong = req.body.favSong;
    interest.favColor = req.body.favColor;
    interest.favFood = req.body.favFood;
    interest.favNumber = req.body.favNumber;

    interest
      .save()
      .then(() => res.json("Interest updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
