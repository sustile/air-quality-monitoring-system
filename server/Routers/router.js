const express = require("express");
const router = express.Router();
const path = require("path");

const dataController = require("../controllers/dataController");

function fileUpload(req, res, next) {
  uploadImage.single("image")(req, res, next);
  next();
}
// CREATE DATA
router.route("/api/enterData").post(dataController.enterData);

//SMOKE DETECTION
router.route("/api/alertSmoke").post(dataController.alertSmoke);

module.exports = router;
