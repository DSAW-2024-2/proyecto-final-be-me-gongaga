const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { createTravel, getAvailableTravels } = require('../controllersTravelController');

router.post('/create', auth, createTravel);
router.get('/available', auth, getAvailableTravels);

module.exports = router;

