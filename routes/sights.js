const router = require('express').Router();
const sightsCtrl = require('../controllers/sights');
// Require the auth middleware
const isLoggedIn = require('../config/auth');

// GET '/destinations/:id/sights/new'
router.get('/destinations/:id/sights/new', isLoggedIn, sightsCtrl.new);
// POST '/destinations/:id'
router.post('/destinations/:id/sights', isLoggedIn, sightsCtrl.create);
// GET '/destinations/:destId/sights/:sightId'
router.get('/sights/:sightId', sightsCtrl.show);
// GET '/destinations/:destId/sights/:sightId/edit'
router.get('/destinations/:destId/sights/:sightId/edit', isLoggedIn, sightsCtrl.edit);
// PUT '/destinations/:destId/sights/:sightId/
router.put('/destinations/:destId/sights/:sightId/', isLoggedIn, sightsCtrl.update);

module.exports = router;