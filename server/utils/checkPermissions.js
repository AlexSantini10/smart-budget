const {UnauthenticatedError} = require('../errors');

const checkPermissions = (requestuser, resourceUserId) => {
    if (requestuser.userId !== resourceUserId.toString()) {
        throw new UnauthenticatedError('You are not authorized to perform this action');
    }
}

module.exports = {
    checkPermissions
}