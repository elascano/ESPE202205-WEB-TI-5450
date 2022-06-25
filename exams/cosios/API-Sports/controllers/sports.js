const mongoose = require('mongoose');
const Sport = require('../models/Sport');

const findAllSports = (req, res) => {
    Sport.find((err, sports)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(sports);
    })
}

const findById = (req, res) => {
    Sport.findById(req.params.id, (err, sports)=> {
        err && res.status(500).send(err.message);

        res.status(200).json(sports);
    })
}

const addSport = (req, res) => {

    let sport = new Sport({
        name: req.body.name,
        kind: req.body.kind,
        place: req.body.place,
        impact: req.body.impact
    });

    sport.save((err. spt) => {
        err && res.status(500).send(err.message);

        res.status(200).json(spt);

    });
    
};

module.exports = {findAllSports, findById, addSport};