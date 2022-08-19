const express = require('express')
const router = express.Router()

const costumerController = require('../controllers/costumerController')

//Mostrar todos (GET)
router.get('/all', costumerController.mostrar)
//Crear  (POST)
router.post('/create', costumerController.crear)
//Editar  (POST)
router.post('/edit', costumerController.editar)
//Borrar  (GET)
router.get('/delete/:id', costumerController.borrar)
module.exports = router

