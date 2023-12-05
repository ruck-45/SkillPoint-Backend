const { Router } = require("express");
const { isInt } = require("../utils/utilFunctions");
const userInfo = require("../data/users.json");

const router = Router();

router.get("/getUser/:id", (req, res) => {
  const [status, id] = isInt(req.params.id);

  if (status) {
    res.status(200).json(userInfo[id - 1]);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
