const router = require('express').Router();
const register = require('./register');
const login = require('./login');
const postCreate = require('./post/postCreate');
const user = require('./user');

router.use('/request/register', register);
router.use('/request/login', login);
router.use('/request/post/create', postCreate);
router.use('/request/user', user);

module.exports = router;