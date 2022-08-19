const express = require("express");
const customer = require("../models/customer");
const router = express.Router();
//GET all
router.get("/customers", async (req,res) => { 
    try{ 
        const customers = await customer.find();
        res.json(customers);
    } catch(err){ 
        res.status(500).json({ messaje: err.message });
    }
});
//GET by costumer id
router.get('/customer/:id', async (req, res) => { 
    try {
        const customerObject = await customer.findOne({ id: req.params.id });
        if (customerObject == null) {
            res.status(400).json('customer not found');
        } else {
            res.json(customerObject);
        }
    } catch (err) {
        res.status(500).json({ message: err.mesagge });
    }

});




module.exports = router;