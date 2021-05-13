const { Router } = require('express');
const { listJokes } = require('../controllers/jokerController');

const router = Router();

router.get('/jokes', listJokes);

module.exports = router;