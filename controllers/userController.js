const User = require('../models/user');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get a single user by ID
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
        try{
            const dbUserData = await User.update(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err)
        }
},

    //deletes a user
    async deleteUser(req, res) {
        try{
            const dbUserdata = await User.delete(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err)
        }
    }
};
    
    
    ;
