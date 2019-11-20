const router = require('express').Router();
const user = require('./user');
const register = require('./register');
const login = require('./login');
const postCreate = require('./post/postCreate');
const postGet = require('./post/postGet');
const editprofile = require('./editprofile');
const allUsers = require('./allUsers');
const sendInvitation = require('./friend/sendInvitation');
const getFriends = require('./friend/getFriends');
const acceptInvitation = require('./friend/acceptInvitation');

router.use('/request/register', register);
router.use('/request/login', login);
router.use('/request/post/create', postCreate);
router.use('/request/post/get', postGet);
router.use('/request/editprofile', editprofile);
router.use('/request/user', user);
router.use('/request/user/all', allUsers);
router.use('/request/friend/request', sendInvitation);
router.use('/request/friend/get', getFriends);
router.use('/request/friend/accept-invitation', acceptInvitation);

module.exports = router;