const { Console } = require('console');
const express = require('express');

const router = express.Router()
const customers = require('../model/customer');

module.exports = router;

router.post('/postCustomer', async (req, res) => {
    const customer = new Customer({
        id: req.body.id,
        fullName: req.body.fullName,
        email: req.body.email,
        type: req.body.type,
        discount: req.body.discount,
        totalSale: req.body.totalSale
    })

    try {
        const dataToSave = await customer.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/customers', async (req, res) => {
    console.log(await customers.find());
    try{
        const customersData = await customers.find();
        res.json(customersData)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/rooms', (req, res) => {

    customers
    .find().then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });


//Get customers by ID
router.get('/customers/:id', (req, res) => {
    res.send(req.params.id)
})

//Get by ID Method
router.get('/customer/:id', async (req, res) => {
    try{
        const customer = await Customer.findById(req.params.Customer.id);
        res.json(customer)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})