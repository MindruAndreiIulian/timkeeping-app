const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const timeEntrySchema = new Schema({
  description: String,
  date: Date,
  time: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("TimeEntry", timeEntrySchema);