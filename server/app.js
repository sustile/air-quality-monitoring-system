const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { createServer } = require("http");
const cookieParser = require("cookie-parser");

const router = require("./Routers/router");
const { pathToFileURL } = require("url");
const app = express();

app.use(cookieParser());
app.use(express.json({ limit: 15000000 }));
app.use(express.static(path.join(__dirname, "../build")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../build/index.html"));
});

app.use("/", router);

const server = createServer(app);

server.listen(4000, () => {
  console.log("Server Started on Port 4000");
});
