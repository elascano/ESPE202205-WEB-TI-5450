const express = require("express");
const customers = require("../models/computerstore");
const router = express.Router();
//GET all
router.get("/getcustomers", async (req,res) => { 
    try{ 
        const computerstore = await customers.find();
        res.json(computerstore);
    } catch(err){ 
        res.status(500).json({ messaje: err.message });
    }
});


module.exports = router;