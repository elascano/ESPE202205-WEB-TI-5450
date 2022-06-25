//Express
const express = require("express");

const soccerteamSchema = require("../models/soccerteam");
const router = express.Router();

//GET
router.get("/soccerteam", (req, res) => {
    soccerteamSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});

router.get("/users/:id", (req, res) => {
    const{id} = req.params;
    soccerteamSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});


module.exports = router;