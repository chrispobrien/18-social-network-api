// Use mongoose package for NoSQL database acccess
const { Schema, model} = require('mongoose');

// User Schema
const UserSchema = Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please supply a user name!',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Please supply an email address!',
        match: [ /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please supply a valid email address!']
    },
    // an array of _id references pointing to Thought documents
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought'}],
    // an array of _id references pointing to other User documents
    friends: [{ type: Schema.Types.ObjectId, ref: 'User'}]
},
{
    // allow virtuals
    toJSON: {
        virtuals: true
    },
    id: false
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;