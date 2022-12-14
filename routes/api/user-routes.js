const router = require('express').Router();

// import controller
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteFriend,
    deleteUser
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Set up POST and DELETE for friend routes
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;