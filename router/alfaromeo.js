const express = require('express');
const Piloto = require('../models/piloto');
const Escuderia = require('../models/escuderia');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const arrayPilotoDB = await Piloto.find({escuderia:'Alfa Romeo'});
        const arrayEscuderiaDB = await Escuderia.find({nombre:'Alfa Romeo'});
        res.render("alfaromeo", { 
            arrayPiloto: arrayPilotoDB,
            arrayEscuderia: arrayEscuderiaDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;