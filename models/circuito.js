const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const circuitoSchema = new Schema({
    nombre: String,
    pais: String,
    ciudad: String,
    kilometros : String,
    curvas: String
})

const Circuito = mongoose.model('dbformula1', circuitoSchema, "circuito");

module.exports = Circuito;