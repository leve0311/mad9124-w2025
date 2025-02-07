const { last } = require("lodash");
const students = require("../models/students.json");

const create = (req, res) => {
  const { firstName, lastName } = req.body;

  const newStudent = {
    id: Date.now(),
    firstName,
    lastName,
  };

  students.push(newStudent);

  res.status(201).json({
    data: newStudent,
  });
};

const getAll = (req, res) => {
  res.status(200).json({
    data: students,
  });
};

const getById = (req, res) => {
  const studentId = req.params.id;
  const student = students.find((s) => s.id === parseInt(studentId, 10));

  if (!student) {
    res.status(404).json({
      error: `student with id ${studentId} not found`,
    });
    return;
  }

  res.json({
    data: student,
  });
};

const replace = (req, res) => {
  const { id } = req.params;
  const foundStudent = students.find(
    (student) => student.id === parseInt(id, 10)
  );

  if (!foundStudent) {
    res.status(404).json({
      error: `student with id ${id} not found`,
    });
    return;
  }

  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    res.status(400).json({
      error: "firstName and lastName required",
    });
  }

  foundStudent.firstName = firstName;
  foundStudent.lastName = lastName;

  res.json({
    data: foundStudent,
  });
};

const update = (req, res) => {
  const studentId = parseInt(req.params.id, 10);

  const foundStudent = students.find((student) => student.id === student);

  if (!foundStudent) {
    res.status(404).json({
      error: `student with id ${studentId} not found`,
    });
    return;
  }

  for (const key of ["firstName", "lastName"]) {
    if (req.body[key]) foundStudent[key] = req.body[key];
  }

  res.json({
    data: foundStudent,
  });
};

const deleteOne = (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIdx = students.findIndex(({ id }) => id === studentId);

  if (studentIdx < 0) {
    res.status(404).json({
      error: `student with id ${studentId} not found`,
    });
    return;
  }
  const [deletedStudent] = students.splice(studentIdx, 1);

  res.json({
    data: deletedStudent,
  });
};

module.exports = {
  create,
  getAll,
  getById,
  replace,
  update,
  deleteOne,
};
