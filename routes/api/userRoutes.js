const router = require('express').Router();

//gets all users functions by requiring the user controller
const {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
