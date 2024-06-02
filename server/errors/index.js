const CustomAPIError = require('./custom-api.js');
const BadRequestError = require('./bad-request.js');
const NotFoundError = require('./not-found.js');
const UnauthenticatedError = require('./unauthenticated.js');

module.exports = {
    CustomAPIError,
    BadRequestError,
    NotFoundError,
    UnauthenticatedError
}