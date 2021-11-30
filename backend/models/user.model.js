//Creating a model of information to pull from

//communicate with the db
const mongoose = require("mongoose");
//set the database schema
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    //This is what the user's schema will contain
    username: {
      type: String,
      //must have a user name
      required: true,
      //username must be different from the other names on the db
      unique: true,
      //trims whitespace off the end of name
      trim: true,
      //name must be at least 8 chars
      minlength: 4,
    },
  },
  {
    //creates timestamp of when the user was created
    timestamps: true,
  }
);

//Getting model ready to be exported and used in program
const User = mongoose.model("User", userSchema);

module.exports = User;
