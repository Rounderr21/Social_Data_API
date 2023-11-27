const router = require('express').Router();

//gets all thoughts functions by requiring the thought controller
const {
  createThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;