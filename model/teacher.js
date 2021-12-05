const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  contact: {
    type: Number,
    required: true,
  },
});

const Teacher = mongoose.model("teacher", teacherSchema);

module.exports = Teacher;
