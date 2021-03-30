const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/character"
);


const characterSeed = [
    {
        name: "Flargin",
        class: "Druid",
        level: 10,
    },
    {
        name: "Stain",
        class: "Druid",
        level: 6,
    },
    {
        name: "Fluffems",
        class: "Druid",
        level: 6,
    },
]

db.character.remove({})
    .then(() => db.character.collection.insertMany(characterSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });