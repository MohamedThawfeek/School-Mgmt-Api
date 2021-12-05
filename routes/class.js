const Class = require("../model/class");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Class Router is Working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Class.create(req.body);
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Class.find({})
      .populate("students", "-_id name enrollment_date ")
      .populate("teacher", "-_id name experience qualification")
      .select("classname -_id");
    res.json({ AllClass: data });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
