const { Router } = require("express");

const studentController = require("../controllers/students");

const router = Router();

router.use((_req, _res, next) => {
  console.log("this only applies to the student router");
  next();
});

router.post(
  "/",
  async (_req, _res, next) => {
    new Promise((res) => {
      console.log("Creating a student 1");
      res();
    }, 2000);
    console.log("did the thing");
    next();
  },
  (_req, _res, next) => {
    console.log("Creating a student 1");
    next();
  },
  (_req, _res, next) => {
    console.log("Creating a student 2");
    next();
  },
  (_req, _res, next) => {
    console.log("Creating a student 3");
    next();
  },
  (_req, _res, next) => {
    console.log("Creating a student 4");
    next();
  },
  studentController.create
);
router.get("/", studentController.getAll);
router.get("/:id", studentController.getById);
router.put("/:id", studentController.replace);
router.patch("/:id", studentController.update);
router.delete("/:id", studentController.deleteOne);

module.exports = router;

function testFn(...args) {
  args.forEach(console.log);
}
