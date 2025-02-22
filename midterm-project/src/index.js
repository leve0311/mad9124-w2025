"use strict";
require("dotenv/config");

const { API_KEY } = process.env;

const express = require("express");

const bookRouter = require("./routers/books");

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  if (!API_KEY) {
    res.status(500).json({
      error: { message: "Environment variable API_KEY not provided" },
    });
    return;
  }
  res.json({
    data: "You're successful and stuff!",
  });
});

app.use("/api/book", bookRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.error("Something went wrong", err);
    return;
  }
  console.log(`App listening on port ${PORT}`);
});
