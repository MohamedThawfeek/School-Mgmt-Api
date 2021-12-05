const router = require("express").Router();

const classRouter = require("./class");
const teacherRouter = require("./teacher");
const studentsRouter = require("./students");

router.use("/class", classRouter);

router.use("/teacher", teacherRouter);

router.use("/students", studentsRouter);

module.exports = router;
