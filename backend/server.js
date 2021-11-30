const express = require("express");

const cors = require("cors");

//how we're going to communicate with mongo
const mongoose = require("mongoose");

//loads from dotenv file for safety
require("dotenv").config();

//Creates express server and sends to port
const app = express();
const port = process.env.PORT || 5000;

//This is the database and connecting to it
const uri = process.env.MONGODB_URI;
//
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

//once the connection is established, send a message to the console that it has been established
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

//Middleware
app.use(cors());

//allows parsing of JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connecting models of the db to server
//first require the files to link the models and routes folders to this page
const interestsRouter = require("./routes/interests");
const usersRouter = require("./routes/users");

//then tell express to use them
//when you go www.blahblah.com/interests it will use the interestsRouter
app.use("/interests", interestsRouter);
//when you go www.blahblah.com/users it will use the usersRouter
app.use("/users", usersRouter);

//Starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
