const mongoose = require("mongoose");
//Load schime
const computerstoreSchema = mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    age: { type: Number },
    moneysprint: { type: Number },
},{collection: "Customer"});
//una vez tenemos el esquema lo exportarmos:
module.exports = mongoose.model('Customer', computerstoreSchema);