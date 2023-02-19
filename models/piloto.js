const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pilotoSchema = new Schema({
    nombre: String,
    pais: String,
    num_Carreras: String,
    victoria :String,
    podio: String,
    dorsal: String,
    escuderia: String
})

const Piloto = mongoose.model('piloto', pilotoSchema, "piloto");

module.exports = Piloto;