const jwt = require('jsonwebtoken');

const createJWT = (user) => {
    const token = jwt.sign(
        { ID: user.ID, nome: user.nome, cognome:user.cognome, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_LIFETIME }
    );
    return token;
}

module.exports = {createJWT};