const express = require('express');
const router = express.Router()
const moviesController = require('../controllers/movie')
const { validateToken } = require('../middleware/validate')

router.get('/', validateToken, moviesController.get);
router.post('/', validateToken, moviesController.create);

module.exports = router;