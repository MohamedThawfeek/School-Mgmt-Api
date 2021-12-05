const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  classname: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "students",
    },
  ],
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "teacher",
  },
});

const Class = mongoose.model("class", classSchema);

module.exports = Class;
