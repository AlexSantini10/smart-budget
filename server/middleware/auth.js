const jwt = require('jsonwebtoken');
const UnauthenticatedError =  require('../errors/unauthenticated.js');

const auth = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        throw new UnauthenticatedError('Authentication invalid');
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        req.user = payload;
        next();
    }
    catch (error) {
        throw new UnauthenticatedError('Authentication is invalid');
    }
}

module.exports = auth;