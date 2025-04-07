const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected to mongodb"))
  .catch((e) => console.error(`Error connecting to mongodb: ${e.message}`));

const Cat = mongoose.model("Cat", { name: String, age: Number });

const main = async () => {
  const kitty = new Cat({ name: "Callie", age: 6 });
  const savedKitty = await kitty.save();
  console.log(`${savedKitty.name} says 'meow'`);

  const newCats = [
    { name: "Fluffy", age: 2 },
    { name: "Pink Spots", age: 12 },
    { name: "Tabatha", age: 16 },
  ];

  const docs = await Cat.insertMany(newCats);
  console.log(docs);

  const catsNamedSpot = await Cat.find({ name: "Spot" });
  console.log({ catsNamedSpot });

  const catsNamedSpotRegexp = await Cat.find({ name: /Spot/ });
  console.log({ catsNamedSpotRegexp });
};
main();
