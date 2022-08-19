const express = require("express");
const Customer = require("../models/Customer");
const router = express.Router();

//Get all customers
router.get("/Customers", async (req, res) => {
    try{
        const Customers = await Customer.find();
        res.json(Customers);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;