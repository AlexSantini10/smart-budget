const express = require('express');
const {register, login, updateUser, getCurrentUser, logout, updatePassword} = require('../controllers/auth_controller.js');
const auth = require('../middleware/auth.js');
const apiLimiter = require('../utils/rateLimiter.js');


const router = express.Router();

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/updateUser').patch(auth, updateUser);
router.route('/updatePassword').patch(auth, updatePassword);
router.route('/getCurrentUser').get(auth, getCurrentUser);
router.route('/logout').get(logout);

module.exports = router;