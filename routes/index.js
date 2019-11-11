const router = require('express').Router();
const user = require('./user');
const register = require('./register');
const login = require('./login');
const postCreate = require('./post/postCreate');
const postGet = require('./post/postGet');
const editprofile = require('./editprofile');

router.use('/request/register', register);
router.use('/request/login', login);
router.use('/request/post/create', postCreate);
router.use('/request/post/get', postGet);
router.use('/request/user', user);
router.use('/request/editprofile', editprofile);

module.exports = router;