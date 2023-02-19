const express = require('express');
const Circuito = require('../models/circuito');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const arrayCircuitoDB = await Circuito.find();

        res.render("circuito", { 
            arrayCircuito: arrayCircuitoDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;