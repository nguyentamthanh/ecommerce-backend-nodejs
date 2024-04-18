"use strict";
const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27017/shopDev";
mongoose
  .connect(connectString)
  .then((_) => console.log(`Connected Mongodb Success`))
  .catch((err) => console.log("Error Connecting"));
// dev
class DataBase {
  constructor() {
    this.connect();
  }
  connect(type = "mongoose") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => console.log(`Connected`))
      .catch((err) => console.log("Error Connecting"));
  }
  static getInstance() {
    if (!DataBase) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }
}
const instanceMongodb = DataBase.getInstance();
module.exports = instanceMongodb;
