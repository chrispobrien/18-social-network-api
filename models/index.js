// require all our models
const User = require('./User');
const Thought = require('./Thought');
const ReactionSchema = require('./Reaction');

// export in one object
module.exports = { User, Thought, ReactionSchema };