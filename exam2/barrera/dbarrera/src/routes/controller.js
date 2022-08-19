const express = require("express");
const cpuSchema = require("../models/customer"); 
const router = express.Router();

//cors
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

router.get('/allcustomers', (req,res) => {
    cpuSchema 
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})); 
});

module.exports = router;
