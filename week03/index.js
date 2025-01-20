"use strict";

const express = require("express");
const students = require("./students.json");

const app = express();

// app.get("/api/cars/", (req, res) => {}); // return a collection of cars
// app.get("/api/cars/:id", (req, res) => {}); // return the car matching the id value
// app.post("/api/cars/", (req, res) => {}); // create a new car
// app.patch("/api/cars/:id", (req, res) => {}); // update some properties of a car
// app.put("/api/cars/:id", (req, res) => {}); // replace all properties of a car
// app.delete("/api/cars/:id", (req, res) => {}); // destroy the record for a car

const PORT = process.nextTick.PORT || 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.error("Something went wrong", err);
    return;
  }
  console.log(`Server running at ${PORT}`);
});
