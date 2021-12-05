const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enrollment_date: {
    type: String,
  },
  classId: {
    type: mongoose.Types.ObjectId,
    ref: "class",
  },
  teacherId: {
    type: mongoose.Types.ObjectId,
    ref: "teacher",
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});

const Students = mongoose.model("students", studentsSchema);

module.exports = Students;
