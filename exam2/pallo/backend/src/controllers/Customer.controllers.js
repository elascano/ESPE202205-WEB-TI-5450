const customersCtrl = {};

const Customers = require("../models/Customer");


customersCtrl.getCustomers = async (req, res) => { 
    const customerss = await Customers.find();
    res.json(customers);
}
customersCtrl.createCustomer = async (req, res) => {
    const {id,name,surname,age} = req.body;
    const newCustomers = new Customers({
        id:id,
        name:name,
        age:age,
        moneySpent:moneySpent
    });
    await newCustomers.save();
    res.json({ message: "Customers saved" });
}

customersCtrl.getCustomer = async (req, res) => {
    const Customers = await Customers.findById(req.params.id);
    res.json(Customers);
}

customersCtrl.updateCustomer = async (req, res) => {
    const {name,surname,age} = req.body;
    await Customers.findByIdAndUpdate(req.params.id,{
        
        id,
        name,
        age,
        moneySpent
    })
    res.json({ message: "Customers Updated" });
}
customersCtrl.deleteCustomer = async (req, res) => {
    await Customers.findByIdAndDelete(req.params.id);
    res.json({ message: "Customers Deleted" });
}

module.exports = customersCtrl;
