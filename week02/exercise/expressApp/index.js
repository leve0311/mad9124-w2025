"use strict";

const express = require("express");
const students = require("../../../week01/exercise/students.json");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello world from express 🚀🚀🚀");
});

app.get("/api", (req, res) => {
  res.json({
    data: students,
  });
});
app.get("/api/:userId", (req, res) => {
  const user = students.find(({ id }) => id.toString() === req.params.userId);
  if (!user) {
    res.status(404).json({
      error: `User with id ${req.params.userId} not found`,
    });
    return;
  }
  res.json({ user });
});
app.get("/feed", (_, res) => {
  res.send("This is your news feed");
});
app.get("username", (_, res) => {
  res.send("Zayn");
});
app.use("*", (_, res) => {
  res.status(404).json({
    error: "Page not found",
  });
});

app.listen(4000, (err) => {
  if (err) {
    console.error("Something went wrong", err);
    console.log("This server is listening to ");
  }
});
