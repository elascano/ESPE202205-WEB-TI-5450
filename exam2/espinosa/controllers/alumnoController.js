const Alumno = require('../model/Customer')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Alumno.find({}, (error, alumnos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error '
            })
        }
        return res.render('index', {alumnos: alumnos})
    })
}

