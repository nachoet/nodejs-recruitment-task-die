const express = require('express');
const route = express.Router()
const moviesController = require('../controllers/movie')
const { validateToken } = require('../middleware/validate')

router.get('/', validateToken, moviesController.get);
router.post('/', validateToken, moviesController.create);

module.exports = router;