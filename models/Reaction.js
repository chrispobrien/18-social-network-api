// Use mongoose package for NoSQL database acccess
const { Schema } = require('mongoose');
// Use package moment for date formatting
const moment = require('moment');

// Reaction Schema
const ReactionSchema = Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Schema.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        maxlength: 280,
        required: 'Please supply text for your reaction!',
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM Do, YYYY [at] h:mm:ss a')
    },
    username: {
        type: String,
        required: 'Please supply a user name!'
    }
},
{
    // allow getters
    toJSON: {
        getters: true
    },
    //id: false
});

module.exports = ReactionSchema;