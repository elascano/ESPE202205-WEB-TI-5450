const express = require("express");
const { restart } = require("nodemon");
const customer = require("../models/customer");
const router = express.Router();

// Get all customers
router.get("/customers", async (req, res) => {
  try {
    const customers = await customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create one customer
router.post('/customer', async (req, res) => {
  const customerObject = new customer({
    id: req.body.id,
    fullname: req.body.fullName,
    email: req.body.email,
    type: req.body.type,
    discount: req.body.discount,
    totalSale: req.body.totalSale
  })

  try {
    const customerToSave = await customerObject.save();
    res.status(200).json(customerToSave)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})


//Get customer by id
router.get('/customer/:id', async (req, res) => {
  try {
    //const customerObject = await customer.findById(req.params.id);
    const customerObject = await customer.findOne({ id: req.params.id });
    if (customerObject == null) { 
      res.status(400).json('Customer NOT FOUND') }
    else {
      res.json(customerObject)
    }
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})


// NOT WORKING> MAYBE PERMISSIONS IN MONGODB
//Delete Customer by id
router.delete('/:id', async (req, res) => {
  try {
      const customerObject = await customer.deleteOne({ id : req.params.id })
      res.send(`Document with ${customerObject.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router;
