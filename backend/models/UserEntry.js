const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userEntrySchema = new Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isActive:{
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("UserEntry", userEntrySchema);