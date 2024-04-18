"use strict";
const mongoose = require("mongoose");
const countConnect = () => {
  const numberOfConnections = mongoose.connections.length;
  console.log(numberOfConnections + " connections");
};
module.exports = {
  countConnect: countConnect,
};
