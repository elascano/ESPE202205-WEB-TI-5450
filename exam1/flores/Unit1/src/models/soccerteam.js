const mongoose = require("mongoose");

//Creation of models with mongoose schema
const soccerteamSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    couchName:{
        type: String,
        required: true
    },
    wonGames: {
        type: Number,
        required: true
    },
    achievements:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Soccerteam', soccerteamSchema);