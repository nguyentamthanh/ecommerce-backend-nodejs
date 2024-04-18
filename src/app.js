const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();
// middleware
app.use(morgan("dev")); // request debig khi dev
app.use(helmet()); // chong lo hong bao mat
app.use(compression()); // du lieu su dung giam di nhieu
// morgan("combined");
// morgan("common");
// morgan("short");
// morgan("tiny");

//db connection
require("./dbs/init.mongodb");
// routes
app.get("/", (req, res, next) => {
  const strCompress = "hello world";
  return res.status(200).json({
    message: "Welcome to the ThanhKun",
  });
});
// handling errors
module.exports = app;
