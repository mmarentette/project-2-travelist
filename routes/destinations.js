const router = require('express').Router();
const destinationsCtrl = require('../controllers/destinations')

// All routes start with '/destinations'

// GET '/destinations'
router.get('/', destinationsCtrl.index);

module.exports = router;