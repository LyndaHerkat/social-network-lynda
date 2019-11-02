const router = require('express').Router();
const register = require('./register');
const login = require('./login');

router.use('/request/register', register);
router.use('/request/login', login);

module.exports = router;