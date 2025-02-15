const users = require("../models/users.json");

const validateUserData = (req, res, next) => {
  const { name, email } = req.body;

  const newUser = {
    id: Date.now(),
    name,
    email,
  };

  if (!name || !email) {
    return res.status(400).send({ error: "Name and email are required" });
  }
  next();

  users.push(newUser);

  res.status(201).json({
    data: newUser,
  });
};

module.exports = validateUserData;
