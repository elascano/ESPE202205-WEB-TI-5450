const express = require("express");
const customerSchema = require("../models/customer"); //Require customer schema
const router = express.Router();
///GET all users customers
router.get('/customers', (req,res) => {
    customerSchema //load schema
    .find() //find all customers
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})); 
});
//GET 1 customer by id (no _id)
router.get("/customer/:id", (req,res) => { //add :id 
    const { id } = req.params; //use id parameter
    customerSchema 
    .find({id:id}) //search by id
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
}); 

module.exports = router;
