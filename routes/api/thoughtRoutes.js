const router = require('express').Router();

//gets all thoughts functions by requiring the thought controller
const {
  createThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions/:reactionId').post(addReaction).delete(deleteReaction);

module.exports = router;