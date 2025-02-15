const walks = require("../models/walks");
const { BadRequestError, NotFoundError } = require("../utils/errors");
const weatherService = require("./weather");

const create = async (body) => {
  const { startTime, endTime, city } = body;
  const id = Date.now();

  if (!startTime || !endTime || !city)
    throw new BadRequestError("Invalid input");

  const weather = await weatherService.getWeather(city, startTime);

  const newWalk = {
    id,
    startTime: new Date(startTime),
    endTime: new Date(endTime),
    city,
    weather,
  };
  walks.push(newWalk);

  return newWalk;
};

const getAll = () => walks;

const getOne = (id) => {
  const walk = walks.find((walk) => id === walk.id);

  if (!walk) throw new NotFoundError(`Walk with id ${id} not found`);

  return walk;
};

const replace = (id, body) => {
  const { startTime, endTime, city } = body;
  const walkIndex = walks.findIndex((walk) => id === walk.id);

  if (walkIndex < 0) throw new NotFoundError(`Walk with id ${id} not found`);
  if (!startTime || !endTime || !city)
    throw new BadRequestError("Invalid input");

  const updatedWalk = {
    id,
    startTime: new Date(startTime),
    endTime: new Date(endTime),
    city,
  };

  walks[walkIndex] = updatedWalk;

  return updatedWalk;
};

const update = (id, body) => {
  const { startTime, endTime, city } = body;
  const walk = walks.find((walk) => id === walk.id);

  if (!walk) throw new NotFoundError(`Walk with id ${id} not found`);

  if (startTime) walk.startTime = startTime;
  if (endTime) walk.endTime = endTime;
  if (city) walk.city = city;

  return walk;
};

const deleteOne = (id) => {
  const walkIndex = walks.findIndex((walk) => id === walk.id);

  if (walkIndex === -1) {
    throw new NotFoundError(`Walk with id ${id} not found`);
  }

  const [deletedWalk] = walks.splice(walkIndex, 1);
  return deletedWalk;
};

module.exports = { create, getAll, getOne, replace, update, deleteOne };
