const CourseController = require('../controller/Courses')
const express = require('express')
const router = express.Router()

//router.metodo_CRUD('uri', controlador.metodo)

router.get('/Cursos', CourseController.getCourses)

module.exports = router