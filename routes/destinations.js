const router = require('express').Router();
const destinationsCtrl = require('../controllers/destinations');
// Require the auth middleware
const isLoggedIn = require('../config/auth');

// All routes start with '/destinations'

// GET '/destinations'
router.get('/', destinationsCtrl.index);
// GET '/destinations/new'
router.get('/new', isLoggedIn, destinationsCtrl.new);
// POST '/destinations'
router.post('/', isLoggedIn, destinationsCtrl.create);
// GET '/destinations/:id'
router.get('/:id', destinationsCtrl.show);

module.exports = router;