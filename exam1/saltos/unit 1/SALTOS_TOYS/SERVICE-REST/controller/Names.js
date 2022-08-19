const Name = require('../model/Name') //import model

//Metodo para crear un nombre 
//create
const createName = (req, res) => { 
    let name = new Name({ 
        name: req.body.name,
        age: req.body.req,
        subTotal: req.body.subTotal
    })

    name.save((err, nam) => { 
        err && res.status(500).json(err.message) 
        res.status(200).json(nam) 
    })
}
//GET
const getnames = (req, res) => { 
    Name.find((err, names) => { 
        err && res.status(500).send(err.message) 
        res.status(200).json(names) 
    })
}

module.exports = {createName,getnames} //Exportamos el metodo creado
