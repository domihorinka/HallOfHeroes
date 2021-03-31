const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const characterSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    classes: {
        type:String,
        required: true
    },
    level: {
        type:Number,
        required: true
    },
});


const character = mongoose.model("character",characterSchema);
module.exports = character;