// Use mongoose package for NoSQL database acccess
const { Schema, model} = require('mongoose');
// Reactions are an array of nested documents in Thought with this schema
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
        get: (createdAtVal) => moment(createdAtVal).format('MMM Do, YYYY [at] h:mm:ss a')
    },
    username: {
        type: String,
        required: 'Please supply a user name!'
    },
    // an array of nested documents with schema of ReactionSchema
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