const express = require('express');
const Campeonato = require('../models/campeonato');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const arrayCampeonatoDB = await Campeonato.find();
        res.render("campeonato", { 
            arrayCampeonato: arrayCampeonatoDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;