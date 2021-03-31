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
        hp: 111,
        stats:[
            {
            strength:10,
            dexterity:14,
            constitution:20,
            intelligence:14,
            wisdom:22,
            charisma:16,
            }
        ],
        inventory: "Explorer's pack, Staff of the Woodlands, and assorted other things from years of isolation on a distant wilderness plane.",
        background: "he came from the woods and eventually went back. Mostly because of a weird magic box that kept putting him into different universes.",
        appearance: "HE'S A MIGHTY AND ADORABLE DWARF!",
    },
    {
        name: "Stain",
        class: "Druid",
        level: 6,
        hp: 47,
        stats:[
            {
            strength:7,
            dexterity:16,
            constitution:14,
            intelligence:10,
            wisdom:18,
            charisma:9,
            }
        ],
        inventory: "A large bag of spider webs, slippers of spider climbing, and an adventures pack with other assorted necessities. ",
        background: "Hello, I'm Stain I lived alone in a cave for 80 years now I'm lost on the surface and ver very ver afraid.",
        appearance: "He's a tiny, stinky, kobold, that prefers to carry around bags of manure to aid in his love for plants.",
    },
    {
        name: "Fufluns",
        class: "Druid",
        level: 6,
        hp: 45,
        stats:[
            {
            strength:12,
            dexterity:15,
            constitution:14,
            intelligence:17,
            wisdom:16,
            charisma:12,
            }
        ],
        inventory: "bag of tricks, wand of web, and an explorers pack with all the essentials.",
        background: "I lived in the woods, I like animals and going with the flow. Also I have a ton of energy. ",
        appearance: "They are a forest gnome and spend most of their time wandering around the wood.",
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