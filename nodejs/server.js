const express = require("express");
const bodyparser = require("body-parser");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "Application/json");
  res.send({ message: "Welcome to IDAP server 🚀", status: 200 });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT} 🚀`);
});
