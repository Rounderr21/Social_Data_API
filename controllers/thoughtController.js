const thought = require('../models/thought');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // creates a new thought
    async createThought(req, res) {
        try {
            const dbThoughtData = await thought.create(req.body);
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // updates a thought
    async updateThought(req, res) {
        try {
            const dbThoughtData = await thought.findOneAndUpdate( thought._id, req.body, { new: true });
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err)

        }
    },
    //deletes a thought
    async deleteThought(req, res) {
        try {
            const dbThoughtData = await thought.findOneAndDelete( thought._id );
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err)

        }
    }
};