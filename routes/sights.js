const router = require('express').Router();
const sightsCtrl = require('../controllers/sights');
// Require the auth middleware
const isLoggedIn = require('../config/auth');

// GET '/destinations/:id/sights/new'
router.get('/destinations/:id/sights/new', isLoggedIn, sightsCtrl.new);
// POST '/destinations/:id/sights'
router.post('/destinations/:id/sights', isLoggedIn, sightsCtrl.create);
// GET '/sights/:sightId'
router.get('/sights/:sightId', sightsCtrl.show);
// GET '/sights/:sightId/edit'
router.get('/sights/:sightId/edit', isLoggedIn, sightsCtrl.edit);
// PUT '/sights/:sightId/
router.put('/sights/:sightId', isLoggedIn, sightsCtrl.update);

module.exports = router;