const express = require('express');
const customer = require("../models/Customer");
const router = express.Router();

router.get("/customer/all", async (req, res) => {
    try {
        const customers = await customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get("/customer/:id", async (req, res) => {
    try {
        const customerObject = await customer.findOne({ id: req.params.id });
        if (photosObject == null) {
            res.status(400).json(404);
        }else{
            res.json(customerObject);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;