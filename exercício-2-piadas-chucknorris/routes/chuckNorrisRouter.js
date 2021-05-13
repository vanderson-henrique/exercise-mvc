const { Router } = require('express');
const { listCategories, listRandomJoke, listJokeByCategory } = require('../controllers/chuckNorrisController');

const router = Router();

router.get('/', (_req, res) => res.redirect('/categories'));
router.get('/categories', listCategories);
router.get('/jokes', listRandomJoke);
router.get('/jokes/:category', listJokeByCategory);

module.exports = router;