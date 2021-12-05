const router = require("express").Router();

const Teacher = require("../model/teacher");

router.get("/", (req, res) => {
  res.send("Teacher Router is Working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Teacher.create(req.body);
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
