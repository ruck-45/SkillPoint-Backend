const { Router } = require("express");
const { isInt } = require("../utils/utilFunctions");
const courseInfo = require("../data/courses.json");
const courseDetails = require("../data/coursesDetails.json");

let courses = [...courseInfo];
courses = courses.sort((a, b) => b.enrolled - a.enrolled);

const router = Router();

router.get("/allInfo", (req, res) => {
  res.status(200).json(courseInfo);
});

router.get("/courseCount", (req, res) => {
  res.status(200).json(courseInfo.length);
});

router.get("/courseInfo/:start/:end", (req, res) => {
  const [startStatus, start] = isInt(req.params.start);
  const [endStatus, end] = isInt(req.params.end);

  if (startStatus && endStatus) {
    res.status(200).json(courseInfo.slice(start-1, end));
  } else {
    res.status(404).end();
  }
});

router.get("/popular/:end", (req, res) => {
  const [status, end] = isInt(req.params.end);

  if (status) {
    res.status(200).json(courses.slice(0, end));
  } else {
    res.status(404).end();
  }
});

router.get("/courseDetail/:id", (req, res) => {
  const [status, id] = isInt(req.params.id);

  if (status && id <= courseDetails.length) {
    res.status(200).json(courseDetails[id - 1]);
  } else {
    res.status(404).end();
  }
});

router.get("/getCourse/:id", (req, res) => {
  const [status, id] = isInt(req.params.id);

  if (status && id<=courseInfo.length) {
    res.status(200).json(courseInfo[id - 1]);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
