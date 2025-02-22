const validateUserData = require("../middleware/validateBookData");
const booklist = require("../models/booklist.json");

const create = validateUserData.createUserData;

const getAll = (req, res) => {
  res.status(200).json({
    data: booklist,
  });
};

const getById = validateUserData.findBook;

const replace = validateUserData.replaceBook;

const update = validateUserData.updateBook;

const deleteOne = validateUserData.deleteBook;

module.exports = {
  create,
  getAll,
  getById,
  replace,
  update,
  deleteOne,
};
