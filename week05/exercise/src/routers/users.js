const { Router } = require("express");

const userController = require("../controllers/users");

const userRouter = Router();

userRouter.post("/", userController.create);
userRouter.get("/", userController.getAll);

module.exports = userRouter;
