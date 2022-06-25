const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SportSchema = new Schema({
    name: { type: String },
    kind: {type: String},
    place: {type: String},
    impact: {type: String}
});

module.exports = Sport = mongoose.model('Sport', SportSchema);