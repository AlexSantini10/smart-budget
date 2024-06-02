const express = require('express');
const {register, login, updateUser, getCurrentUser, logout} = require('../controllers/auth_controller.js');
const auth = require('../middleware/auth.js');

const rateLimiter = require('express-rate-limit');

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

const router = express.Router();

router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);
router.route('/updateUser').patch(auth, updateUser);
router.route('/getCurrentUser').get(auth, getCurrentUser);
router.route('/logout').get(logout);

module.exports = router;