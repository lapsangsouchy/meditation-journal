const mongoose = require("mongoose");

const EntrySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  log: {
    type: String,
    required: true,
  },
  effective: {
    type: String,
    required: true,
  },
  question: {
    type: String,
  },
});

module.exports = mongoose.model("entry", EntrySchema);
