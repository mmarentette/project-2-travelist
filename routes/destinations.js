const router = require('express').Router();
const destinationsCtrl = require('../controllers/destinations')

// All routes start with '/destinations'

// GET '/destinations'
router.get('/', destinationsCtrl.index);
// GET '/destinations/new'
router.get('/new', destinationsCtrl.new);
// POST '/destinations'
router.post('/', destinationsCtrl.create);
// GET '/destinations/:id'
router.get('/:id', destinationsCtrl.show);

module.exports = router;