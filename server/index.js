// index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users"); // Import the User model

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(
  
);

// Endpoint to handle user creation
app.post("/createUser", (req, res) => {
  userModel
    .create(req.body) // Create a new user using the UserModel
    .then((users) => res.json(users)) // Send the created user as JSON response
    .catch((err) => res.json(err)); // Handle any errors that occur during user creation
});

// Start the server on port 3001
app.listen(3001, () => {
  console.log("Server is Running!");
});
