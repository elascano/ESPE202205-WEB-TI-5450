const { Router } = require("express");
const router = Router();

const { getCustomers,
     createCustomer, 
     getCustomer, 
     updateCustomer, 
     deleteCustomer } = require("../controllers/Customer.controllers");

router.route("/")
.get(getCustomers)
.post(createCustomer)

router.route("/:id")
.get(getCustomer)
.put(updateCustomer)
.delete(deleteCustomer)


module.exports = router;