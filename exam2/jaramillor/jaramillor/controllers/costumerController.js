const Costumer = require('../model/Costumer')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Costumer.find({}, (error, costumers)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error show costumers'
            })
        }
        return res.render('index', {costumers: costumers})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const costumer = new Costumer({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        moneySpent: req.body.moneySpent

    })
    costumer.save(function(error,costumer){
        if(error){
            return res.status(500).json({
                message: 'Error create costumer'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const name = req.body.nombre_editar
    const age = req.body.edad_editar
    const moneySpent = req.body.MoneySpent_editar
    Costumer.findByIdAndUpdate(id, {name, age, moneySpent}, (error, costumer)=>{
        if(error){
            return res.status(500).json({
                message: 'Error updating costumer'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Costumer.findByIdAndRemove(id, (error, costumer)=>{
        if(error){
            return res.status(500).json({
                message: 'Error delete costumer'
            })
        }
        res.redirect('/')
    })
}