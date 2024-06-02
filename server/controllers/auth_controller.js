const StatusCodes = require('http-status-codes');
const attachCookie = require('../utils/attachCookie.js');
const {user_exists, get_user_by_email, create_user, authenticate_user, edit_user} = require('../db/users.js');
const {generate_password_sha2_256} = require('../db/utils.js');
const {createJWT} = require('../utils/createJWT.js');

const {BadRequestError, NotFoundError, UnauthenticatedError} = require('../errors');

const register = async (req, res) => {
    const {nome, cognome, email, password} = req.body;

    if (!nome || !cognome || !email || !password) {
        throw new BadRequestError('Please provide all values');
    }

    const userAlreadyExists = await user_exists(email);
    if (userAlreadyExists) {
        throw new BadRequestError('Email already exists');
    }

    
    await create_user(nome, cognome, email, password);
    let user = await get_user_by_email(email);

    let max_attempts = 50;
    while (!user && max_attempts-- > 0) {
        user = await get_user_by_email(email);
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    if (!user) {
        throw new Error('User not found after registration');
    }
    
    const token = createJWT(user);
    attachCookie({res, token});
    res.status(StatusCodes.CREATED).json({
        user: {
            email: user.email, 
            cognome: user.cognome,
            nome: user.nome
        }
    });
}

const login = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        throw new BadRequestError('Please provide all values');
    }

    const auth = await authenticate_user(email, password);

    if (!auth) {
        throw new UnauthenticatedError('Invalid credentials');
    }

    const user = await get_user_by_email(email);

    const token = await createJWT(user);

    attachCookie({res, token});
    res.status(StatusCodes.OK).json({
        user: {
            email: user.email, 
            cognome: user.cognome,
            nome: user.nome
        }
    });
}

const updateUser = async (req, res) => {
    const {email, nome, cognome} = req.body;

    if (!email && !nome && !cognome) {
        throw new BadRequestError('Please provide some values to update');
    }

    const user = await get_user_by_email(req.user.email);

    if (!user) {
        throw new NotFoundError('User not found');
    }

    data_to_update = {}
    if (nome) {
        data_to_update.nome = nome;
    }
    if (cognome) {
        data_to_update.cognome = cognome;
    }

    await edit_user(req.user.email, data_to_update);

    res.status(StatusCodes.OK).json({
        user: {
            email: email || user.email, 
            cognome: cognome || user.cognome,
            nome: nome || user.nome
        }
    });
}

const getCurrentUser = async (req, res) => {
    const user = await get_user_by_email(req.user.email);

    if (!user) {
        throw new NotFoundError('User not found');
    }

    res.status(StatusCodes.OK).json({
        user: {
            email: user.email, 
            cognome: user.cognome,
            nome: user.nome
        }
    });
}

const logout = async (req, res) => {
    if (!req.cookies.token) {
        throw new UnauthenticatedError('Not logged in');
    }

    res.cookie('token', 'none', {
        httpOnly: true,
        expires: new Date(Date.now() + 1000)
    });

    res.status(StatusCodes.OK).json({
        msg: 'Logged out'
    });
}

module.exports = {
    register,
    login,
    updateUser,
    getCurrentUser,
    logout
};