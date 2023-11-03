const router = require('express').Router();
const commentsCtrl = require('../controllers/comments');
// Require the auth middleware
const isLoggedIn = require('../config/auth');

// POST '/sights/:sightId/comments'
router.post('/sights/:sightId/comments', commentsCtrl.create);
// DELETE '/sights/:sightId/comments/:commentId'
router.delete('/sights/:sightId/comments/:commentId', isLoggedIn, commentsCtrl.delete);

module.exports = router;