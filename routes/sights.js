const router = require('express').Router();
const sightsController = require('../controllers/sights')

// GET '/destinations/:id/sights/new'
router.get('/destinations/:id/sights/new', sightsController.new);

module.exports = router;