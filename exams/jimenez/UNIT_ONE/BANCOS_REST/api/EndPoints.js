const BancosController = require('../controller/Banco')
const express = require('express')
const router = express.Router()



router.post('/add',BancosController.createBancos)
router.get('/all',BancosController.getBancos)
router.put('/update',BancosController.updateBancos)
router.delete('/delete', BancosController.deleteBancos)


module.exports = router