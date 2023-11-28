const { Schema, model, Types } = require('mongoose');

// Reaction Schema that is located in the Thought model
const reactionSchema = new Schema({
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  // Thought Schema model
  const thoughtSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema] // Using reactionSchema as a subdocument within thoughtSchema
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });
  
  // Virtual that retrieves the length of the thought's reactions array field on query
  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
 
  const Thought = model('Thought', thoughtSchema);
  
  module.exports = Thought;
  