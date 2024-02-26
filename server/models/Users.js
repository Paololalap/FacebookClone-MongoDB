// Users.js

const mongoose = require("mongoose");

// Define the schema for the user model
const userSchema = new mongoose.Schema({
  email: String,  
  password: String,
});

// Create the User model using the defined schema
const userModel = mongoose.model("User", userSchema);

// Export the User model for use in other files
module.exports = userModel;
