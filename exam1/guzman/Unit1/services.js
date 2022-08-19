const express = require('express');
const Building = require('./model');
const router = express.Router();

router.post('/create', async (req, res) => {
    const data = new Building({
        nombre: req.body.nombre,
        pisos: req.body.pisos,
        color: req.body.color,
        direccion: req.body.direccion,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;

