const Bancos = require('../model/Bancos')

const createBancos = (req, res) => {
    let bancos = new Bancos({
        Name: req.body.Name,
        YearsOfservice: req.body.YearsOfservice,
        Address: req.body.Address,
        Phone: req.body.Phone,
    })

    bancos.save((err, ban) => {
        err&&res.status(500).json(err.message)
        res.status(200).json(ban)
    })
}

const getBancos = (req, res) => {
    Bancos.find((err, bancos) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(bancos)
    })
    
}

const updateBancos = (req, res) => {
    Bancos.findOneAndUpdate({Name: req.body.Name},{YearsOfservice: req.body.YearsOfservice},(err,ban) =>{    
        err&&res.status(500).send(err.message)
        res.status(200).send(ban)
    })
        
}

const deleteBancos = (req, res) => {
    Bancos.findOneAndDelete({Name: req.body.Name}, (err , ban) => {
        err && res.status(501).send(err.message)
        res.status(200).send(ban)
    })
}


module.exports = {createBancos, getBancos, updateBancos, deleteBancos}
