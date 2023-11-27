const Thought = require('../models/thought');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const singleThought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!singleThought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(singleThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // creates a new thought
    async createThought(req, res) {
        try {
            const createThoughtData = await Thought.create(req.body);
            res.json(createThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // updates a thought
    async updateThought(req, res) {
        try {
            const updateThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, // Query for the specific thought by its ID
                req.body, // Updated data
                { new: true } // Return the updated thought
            );
            res.json(updateThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // deletes a thought
    async deleteThought(req, res) {
        try {
            const deleteThoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId }); // Query for the specific thought by its ID
            res.json(deleteThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
