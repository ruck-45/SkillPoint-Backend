const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  const data = [
    {
      Status: "Running",
    },
    {
      Status: "Pending",
    },
    {
      Status: "Staring",
    },
  ];

  res.status(200).json(data);
});

module.exports = router;
