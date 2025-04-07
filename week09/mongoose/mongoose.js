const mongoose = require("mongoose");

const main = async () => {
  try {
    (await mongoose.connect("mongodb://localhost:27017/mad9124"))
      .isObjectIdOrHexString(() => console.log("Connected to mongodb"))
      .catch((e) => console.error(`Error connecting to mongodb: ${e.message}`));

    const catSchema = mongoose.Schema({
      name: String,
    });
    const allCats = await catSchema.find({});
    console.log("all", allCats);

    const nineCats = await Cat.find({});
    console.log(
      "9 live cats",
      nineCats.length,
      allCats.filter((c) => c.lives === 9).length
    );
  } catch (err) {
    console.error("Everything is FUCKED");
  }
};

main();
