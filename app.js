const express = require("express");
const cors = require("cors");

const courses = require("./routes/courses");
const port = 5000;

const app = express();
app.use(cors());

// Routes
app.use("/api/courses", courses);

app.all("*", (req, res) => {
  res.status(404).end();
});


// Server Listen
app.listen(port, () => {
  console.log("Server Listening on PORT:", port);
});
