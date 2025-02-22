const { Router } = require("express");

const bookController = require("../controllers/books");

const bookRouter = Router();

bookRouter.post("/", bookController.create);
bookRouter.get("/", bookController.getAll);
bookRouter.get("/:id", bookController.getById);
bookRouter.put("/:id", bookController.replace);
bookRouter.patch("/:id", bookController.update);
bookRouter.delete("/:id", bookController.deleteOne);

module.exports = bookRouter;
