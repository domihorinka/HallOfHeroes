const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    class: {
        type:String,
        required: true
    },
    // class: [{
    //     barbarian: {
    //         type:String,
    //     },
    //     bard: {
    //         type:String,
    //     },
    //     cleric: {
    //         type:String,
    //     },
    //     druid: {
    //         type:String,
    //     },
    //     fighter: {
    //         type:String,
    //     },
    //     monk: {
    //         type:String,
    //     },
    //     paladin: {
    //         type:String,
    //     },
    //     ranger: {
    //         type:String,
    //     },
    //     rogue: {
    //         type:String,
    //     },
    //     sorcerer: {
    //         type:String,
    //     },
    //     warlock: {
    //         type:String,
    //     },
    //     wizard: {
    //         type:String,
    //     },
    // }],
    level: {
        type:Number,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    
    strength: {
        type: Number,
        required: true
    },
    dexterity: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    wisdom: {
        type: Number,
        required: true
    },
    charisma: {
        type: Number,
        required: true
    },
    charisma: {
        type: Number,
        required: true
    },
    inventory: {
        type: String,
    },
    background: {
        type: String,
    },
    appearance: {
        type: String,
    },
});

const character = mongoose.model("character",characterSchema);
module.exports = character;
