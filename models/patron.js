const mongoose = require("mongoose"),
    patronSchema = mongoose.Schema({
        name : String,
        email : String,
        animalType : String
    });

module.exports = mongoose.model("Patron", patronSchema);