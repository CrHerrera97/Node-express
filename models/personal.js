const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personalSchema = new Schema({
    nombre: String,
    cargo: String
});

//creamos el modelo

const Personal = mongoose.model("Personal",personalSchema,"personal");

module.exports = Personal;