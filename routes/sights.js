const router = require('express').Router();
const sightsController = require('../controllers/sights')

// GET '/destinations/:id/sights/new'
router.get('/destinations/:id/sights/new', sightsController.new);
// POST '/destinations/:id'
router.post('/destinations/:id/', sightsController.create)
// GET '/destinations/:destId/sights/:sightId'
router.get('/destinations/:destId/sights/:sightId', sightsController.show)
// GET '/destinations/:destId/sights/:sightId/edit'
router.get('/destinations/:destId/sights/:sightId/edit', sightsController.edit);
// PUT '/destinations/:destId/sights/:sightId/
router.put('/destinations/:destId/sights/:sightId/', sightsController.update);

module.exports = router;