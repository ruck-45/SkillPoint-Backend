const express = require("express");
const cors = require("cors");

const courses = require("./routes/courses");
const users = require("./routes/users");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

// Routes
app.use("/api/courses", courses);
app.use("/api/users", users);

app.all("*", (req, res) => {
  res.status(404).end();
});


// Listen on port 5000
app.listen(port, () => {
  console.log("Server Listening on PORT:", port);
});
