const config = require("../config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb, {
});
const Schema = mongoose.Schema;

const Task = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Task", Task);