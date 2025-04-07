"use strict";

require("dotenv/config");
const express = require("express");
const expressMongoSanitize = require("express-mongo-sanitize");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");

const studentRouter = require("./routers/students");
const { errorHandler } = require("./middleware/errors");
const { connect } = require("./models/db");
const sanitizeBody = require("./middleware/sanitizeBody");
const logger = require("./util/logger");

connect();

const app = express();

app.use(express.json());
app.use(compression());
app.use(
  cors({
    origin: (process.env.CORS_ALLOWLIST || "").split(","),
    credentials: true,
  })
);
app.use(morgan("tiny"));
app.use((req, res, next) => {
  console.log(req.body);
  next();
});
app.use(expressMongoSanitize());
app.use(sanitizeBody);

app.use("/api/students", studentRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
  if (err) {
    logger.error("Something went wrong", err);
    return;
  }
  logger.info(`Server running at ${PORT}`);
});
