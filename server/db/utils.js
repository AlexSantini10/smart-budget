const { connect } = require('./connect');


const generate_password_sha2_256 = async (password) => {
    const crypto = require('crypto');

    const hash = crypto.createHash('sha256').update(password).digest('hex').toUpperCase();
    
    return hash;
}

module.exports = {generate_password_sha2_256};