const express = require('express');
const Piloto = require('../models/piloto');
const Escuderia = require('../models/escuderia');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const arrayPilotoDB = await Piloto.find({escuderia:'Mercedes'});
        const arrayEscuderiaDB = await Escuderia.find({nombre:'Mercedes'});
        res.render("mercedes", { 
            arrayPiloto: arrayPilotoDB,
            arrayEscuderia: arrayEscuderiaDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;