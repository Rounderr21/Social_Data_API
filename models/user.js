const { Schema, model, Types } = require('mongoose');

// friends schema located in the User model
const friendsSchema = new Schema({
    friendName: {
        type: String,
        required: true
    }
});

// User Schema model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ]
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/],
        trim: true
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [friendsSchema] // Using the friendsSchema as a subdocument within userSchema
},
{
    toJSON: {
        getters: true
    }
});

// Virtual that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;