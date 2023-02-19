const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const escuderiaSchema = new Schema({
    nombre: String,
    pais :String,
    motor: String,
    fundacion: String
})

const Escuderia = mongoose.model('escuderia', escuderiaSchema, "escuderia");

module.exports = Escuderia;