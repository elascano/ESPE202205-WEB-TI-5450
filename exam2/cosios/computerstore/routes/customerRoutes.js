const express = require("express");
const seller = require("../models/customer");
const router = express.Router();

// Get

router.get("/customers", async (req, res) => {
    try{
        const customers = await customer.find();
        res.json(customers);

    } catch (err){
        res.status(500).json({ message: err.message});

    }
});


//Get by ID

router.get('/customer/:id', async (req, res) => {
    try{
        const customerObject = await customer.findOne({ id: req.params.id})
        if (customerObject == null) {
            res.status(400).json('Customer not FOUND')
        } else {
            res.json(customerObject);
        }


    }
    catch(error){
        res.status(500).json({ message: err.message});

    }
    
});

// Post 
router.post('/customer', async (req, res) => {
    const customerObject = new customer({
    
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    moneySpend: req.body.moneySpend
    });
    try{
        const customerToSave = await customerObject.save();
        res.status(200).json(customerToSave);

    }
    catch(err){
        res.status(500).json({ message: error.message})
    }
});

module.exports = router;