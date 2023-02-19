const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campeonatoSchema = new Schema({
    temporada: String,
    piloto_campeon: String,
    puntos_piloto: String,
    escuderia_campeon: String,
    puntos_escuderia : String
})

const Campeonato = mongoose.model('campeonato', campeonatoSchema, "campeonato");

module.exports = Campeonato;