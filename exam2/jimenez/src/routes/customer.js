const express = require("express");
const customerSchema = require("../models/customer");

const router = express.Router();

//add
router.post("/Customer", (req, res) => {
    const customer = customerSchema(req.body);
    customer
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//get
router.get("/Customer", (req, res) => {
    customerSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

router.get("/Customer/:id", (req, res) => {
    const { id } = req.params;
    customersSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

//update
router.put("/Customer/:id", (req, res) => {
    const { id } = req.params;
    const { Id, name, age, moneySpent } = req.body;
    customerSchema
      .updateOne({ _id: id }, { $set: { Id, name, age, moneySpent } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

//delete
router.delete("/Customer/:id", (req, res) => {
    const { id } = req.params;
    costomerSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;