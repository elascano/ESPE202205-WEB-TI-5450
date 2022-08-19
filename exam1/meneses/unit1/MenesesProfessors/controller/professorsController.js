const Professor = require('../model/professors')

const createProfessor = (req, res) =>{
    let professor = new Professor({
        name: req.body.name,
        lastName: req.body.lastName,
        phone: req.body.phone,
        subject: req.body.subject
    })

    professor.save((err, prof) =>{
        err && res.status(500).json(err.message)
        res.status(200).json(prof)
    })
}

const getProfessor = (req, res) =>{
    Professor.find((err, prof) =>{
        err && res.status(500).json(err.message)
        res.status(200).json(prof)
    })
}


module.exports = {createProfessor, getProfessor}