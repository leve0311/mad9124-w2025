"use strict";

const mongoose = require("mongoose");

const catSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    lives: Number,
    favouriteFoods: [String],
  },
  {
    timestamps: true,
  }
);

const Cat = mongoose.model("Cat", catSchema);

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/explore-mongo");

    // Get all cats
    // const allCats = await Cat.find({});
    // console.log("all", allCats);

    // Get all cats with 9 lives
    // const nineCats = await Cat.find({ lives: 9 });
    // console.log("ninelives", nineCats);

    // Get all cats older than 9 years old
    // const olderNine = await Cat.find({ age: { $gt: 9 } });
    // console.log(olderNine);

    // Get all cats whose name starts with `G`
    // const gCats = await Cat.find({ name: /^G/i });
    // console.log(gCats.length);

    // Get all cats that like tuna
    // const tunaCats = await Cat.find({ favouriteFoods: "tuna" });
    // console.log(tunaCats.length);

    // Get all cats that don't like tuna
    // const noTunaCats = await Cat.find({ favouriteFoods: { $ne: "tuna" } });
    // console.log(noTunaCats.length);

    // Get all cats that like potatoes or strawberry
    // const potStrawCats = await Cat.find({
    //   favouriteFoods: { $in: ["potatoes", "strawberry"] },
    // });
    // console.log(potStrawCats.length);

    // Get all cats that like mice and biscuits
    // const miceBisCats = await Cat.find({
    //   $and: [{ favouriteFoods: "mice" }, { favouriteFoods: "biscuits" }],
    // });
    // console.log(miceBisCats.length);

    // Get the oldest cat

    // Get the oldest cat that likes fish

    // Get the cat with the least lives that like milk and biscuits
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
};

main();
