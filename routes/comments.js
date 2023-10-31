const router = require('express').Router();
const commentsController = require('../controllers/comments')

// POST '/destinations/:destId/sights/:id/comments'
router.post('/destinations/:destId/sights/:sightId/comments', commentsController.create);

module.exports = router;