const mongoose = require("mongoose");
//Load schime
const customerSchema = mongoose.Schema({
    id: { type: Number },
    marca: { type: String },
    color: { type: String },
    price: { type: Number },
},{collection: "Customer"});
//una vez tenemos el esquema lo exportarmos:
module.exports = mongoose.model('Customer', customerSchema);