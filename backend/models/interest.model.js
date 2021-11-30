//Creating a model of information to pull from

//communicate with the db
const mongoose = require("mongoose");
//set the database schema
const Schema = mongoose.Schema;

const interestSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    //This is what the schema will contain
    favSong: {
      type: String,
      required: true,
    },
    favColor: {
      type: String,
      required: true,
    },
    favFood: {
      type: String,
      required: true,
    },
    favNumber: {
      type: Number,
      required: true,
    },
  },
  {
    //creates timestamp of when the interests was created
    timestamps: true,
  }
);

//Getting model ready to be exported and used in program
const Interests = mongoose.model("Interests", interestSchema);

module.exports = Interests;
