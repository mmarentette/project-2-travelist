const router = require('express').Router();
const sightsCtrl = require('../controllers/sights')

// GET '/destinations/:id/sights/new'
router.get('/destinations/:id/sights/new', sightsCtrl.new);
// POST '/destinations/:id'
router.post('/destinations/:id/', sightsCtrl.create)
// GET '/destinations/:destId/sights/:sightId'
router.get('/destinations/:destId/sights/:sightId', sightsCtrl.show)
// GET '/destinations/:destId/sights/:sightId/edit'
router.get('/destinations/:destId/sights/:sightId/edit', sightsCtrl.edit);
// PUT '/destinations/:destId/sights/:sightId/
router.put('/destinations/:destId/sights/:sightId/', sightsCtrl.update);

module.exports = router;