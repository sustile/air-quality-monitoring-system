const dataModel = require("../models/dataModel");
const mongoose = require("mongoose");
const jwt = require("../utils/jwtToken");
const appError = require("../utils/appError");
const bcrypt = require("bcryptjs/dist/bcrypt");

const data = mongoose.model("data", dataModel);

exports.data = data;
const path = require("path");
const fs = require("fs");

exports.enterData = async (req, res) => {
  try {
    const body = Object.assign(req.body, {
      time: Date.now(),
    });
    console.log(body);
    if (!body.temperature) {
      res.status(400).json({
        status: "fail",
        message: "No Temperature Data",
      });
    } else if (!body.humidity) {
      res.status(400).json({
        status: "fail",
        message: "No Humidity Data",
      });
    } else if (!body.carbonMonoxide) {
      res.status(400).json({
        status: "fail",
        message: "No Carbon Monoxide Data",
      });
    } else if (!body.hydrogen) {
      res.status(400).json({
        status: "fail",
        message: "No Hydrogen Data",
      });
    }

    const newData = await data.create(body);

    res.status(200).json({
      status: "ok",
    });
    return;
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Something went Wrong",
    });
  }
};

exports.alertSmoke = async (req, res) => {
  try {
    console.log("Smoke");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Something went Wrong",
    });
  }
};