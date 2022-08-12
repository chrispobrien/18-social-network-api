// Use mongoose package for NoSQL database acccess
const { Schema, model} = require('mongoose');
// Reactions
const ReactionSchema = require('./Reaction');
// Use package moment for date formatting
const moment = require('moment');

// Thought Schema
const ThoughtSchema = Schema({
    thoughtText: {
        type: String,
        maxlength: 280,
        required: 'Please supply text for your thought!',
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM Do, YYYY at h:mm:ss a')
    },
    username: {
        type: String,
        required: 'Please supply a user name!'
    },
    // an array of nested documents of type reactions
    reactions: [ ReactionSchema ],
},
{
    // allow virtuals and getters
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;