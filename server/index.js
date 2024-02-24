//server/index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://paolomorales1502:mNaeYCglRQ2jsi95@cluster0.tznjlr3.mongodb.net/facebook"
);

app.post("/createUser", (req, res) => {
  userModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running!");
});
