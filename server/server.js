const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const path = require("path");
const fs = require("fs");

dotenv.config({
  path: path.join(__dirname, "./.env"),
});

console.log(process.env.DATABASE);

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/air", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the Database");
  }
});
