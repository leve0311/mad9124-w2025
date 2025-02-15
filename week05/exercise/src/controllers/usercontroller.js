const validateUserData = require("../middleware/validateUserData");
const users = require("../models/users.json");

const create = validateUserData;

const getAll = (req, res) => {
  res.status(200).json({
    data: users,
  });
};

module.exports = {
  create,
  getAll,
};
