const ProfessorController = require ('../controller/professorsController')
const express = require ('express')
const router = express.Router()

router.post('/addProfessor', ProfessorController.createProfessor)
router.get('/getProfessor', ProfessorController.getProfessor)


module.exports = router 