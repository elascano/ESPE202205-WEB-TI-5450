const SportController = require('../controllers/sports');
const express = require('express');

const router = express.Router();

router.get('/all', SportController.findAllSports);

router.get('/:id', SportController.findById);

router.post('/add', SportController.addSport);

module.exports = router;