const express = require('express');
const Customers = require('./model');
const router = express.Router();

router.get('/getCustomers', async (req, res) => {
    try {
        const data = await Customers.find();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;