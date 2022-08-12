const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .sort({ username: 1 })
            .then(dbUsers => res.json(dbUsers))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .select('-__v')
            .then(dbUserData => {
                // if no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // create User
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(500).json(err));
    },

    // update User by id
    updateUser({ params, body}, res) {
        User.findOneAndUpdate({ _id: params.id }, body, {new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(500).json(err));
    },

    // delete User by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                // delete all Thoughts with this username
                dbUserData.thoughts.map(id => Thought.findOneAndDelete({ _id: id}));
                // just in case - don't use this
                // Thought.deleteMany({ username: dbUserData.username });
                res.json(dbUserData);
            })
            .catch(err => res.status(500).json(err));
    },
};

module.exports = userController;