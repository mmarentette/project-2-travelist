const router = require('express').Router();
const commentsCtrl = require('../controllers/comments')

// POST '/destinations/:destId/sights/:id/comments'
router.post('/destinations/:destId/sights/:sightId/comments', commentsCtrl.create);
// DELETE '/destinations/:destId/sights/:sightId/comments/:commentId'
router.delete('/destinations/:destId/sights/:sightId/comments/:commentId', commentsCtrl.delete);

module.exports = router;