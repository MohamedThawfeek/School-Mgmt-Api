const Students = require("../model/students");

const Class = require("../model/class");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Students Router is Working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Students.create(req.body);

    const classData = await Class.findByIdAndUpdate(
      { _id: data.classId },
      {
        $push: { students: data._id },
      },
      { new: true }
    );
    res.json({ student: data, class: classData });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Students.find({})
      .populate("classId", "-_id classname")
      .populate("teacherId", "-_id name contact")
      .select("name -_id");
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
