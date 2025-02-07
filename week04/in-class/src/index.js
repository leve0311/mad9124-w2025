"use strict";

const express = require("express");
const morgan = require("morgan");

const studentRouter = require("./routers/students");

const app = express();
app.use(morgan("tiny"));

app.use((req, res, next) => {
  console.log("1", req.body);
  req.time = "hello";
  next();
});
app.use(express.json());
app.use("/api/students", studentRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.error("Something went wrong", err);
    return;
  }
  console.log(`Server running at ${PORT}`);
});
