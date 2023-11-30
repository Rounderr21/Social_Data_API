// Purpose: To handle all user related routes
const User = require('../models/user');

module.exports = {
  // gets all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // gets a single user by ID
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // creates a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err)
    }
  },
    // updates a user
    async updateUser(req, res) {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: req.params.userId },
          req.body,
          { new: true } // To get the updated user data back
        );
        res.json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    //deletes a user
    async deleteUser(req, res) {
      try {
          const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });
  
          if (!deletedUser) {
              return res.status(404).json({ message: 'No user found with that ID' });
          }
  
          res.json({ message: 'User deleted successfully', deletedUser });
      } catch (err) {
          res.status(500).json(err);
      }
  },
  //adds a friend
  async addFriend(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.body } },
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) { 
      res.status(500).json(err);
    }
},
//deletes a friend
async deleteFriend(req, res) {
  try {
      const updatedUser = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: { _id: req.params.friendId } } },
          { new: true }
      );
      res.json(updatedUser);
  } catch (err) {
      res.status(500).json(err);
  }
}
};