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
    level: {
        type:Number,
        required: true
    },
});


const character = mongoose.model("Character",characterSchema);
module.exports = character;