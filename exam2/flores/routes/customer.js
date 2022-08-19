const express = require("express");
const Customers = require("../models/customer");
const router = express.Router();

//ALL
router.get("/allCustomers", async (req, res) => {
  try {
    const customers = await Customers.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
