const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected to mongodb"))
  .catch((e) => console.error(`Error connecting to mongodb: ${e.message}`));

const main = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/explore-mongo');
    const cat = new Cat({
      name: "test",
      age: 1,
      lives: 9,
      owner: "787t094ut",
      tricks: [{
        name: puke,
        dateLearned: new Date(),
    },],
    });
  } catch {
    return new Error(message.error);
  }
}