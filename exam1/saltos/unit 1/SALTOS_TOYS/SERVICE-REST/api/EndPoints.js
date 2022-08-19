const NameController = require('../controller/Names') 
const express = require('express')
const router = express.Router() 

/*URI*/
router.get("/all",NameController.getnames)

module.exports = router