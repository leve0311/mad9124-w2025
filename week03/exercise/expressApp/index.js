"use strict";
const express = require("express");
const cars = require("./cars.js");

const app = express();

// create a new car
app.post("/api/cars", (req, res) => {
  //find new car data
  const newCar = req.body;
  response.send({ data: cars });
  console.log("new car", newCar);

  // save new student to our array

  // respond with new car (including its id)
});

// READ
//Return a collection of cars
app.get("/api/cars/", (req, res) => {
  res.status(200).json({
    data: cars,
  });
});

// return the student matching the id value
app.get("/api/cars/:id", (req, res) => {
  const carId = req.params.id;
  const car = cars.find((s) => s.id === parseInt(carId, 10));

  if (!car) {
    res.status(404).json({
      error: `car with id ${carId} not found`,
    });
    return;
  }
  res.json({ data: car });
});

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
