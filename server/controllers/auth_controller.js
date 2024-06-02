const StatusCodes = require('http-status-codes');
const attachCookie = require('../utils/attachCookie.js');
const {user_exists, get_user_by_email, create_user} = require('../db/users.js');
const {createJWT} = require('../utils/createJWT.js');

const {BadRequestError, NotFoundError, UnauthenticatedError} = require('../errors');

const register = async (req, res) => {
    const {name, lastName, email, password} = req.body;

    if (!name || !lastName || !email || !password) {
        throw new BadRequestError('Please provide all values');
    }

    const userAlreadyExists = await user_exists(email);
    if (userAlreadyExists) {
        throw new BadRequestError('Email already exists');
    }

    
    await create_user(name, lastName, email, password);
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
        }, 
        location: 'Italy'
    });
}

const login = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        throw new BadRequestError('Please provide all values');
    }

    const user = await User.findOne({email}).select('+password');

    if (!user) {
        throw new UnauthenticatedError('Invalid credentials');
    }

    const isPasswordCorrect = await user.comparePasswords(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid credentials');
    }

    const token = user.createJWT();

    user.password = undefined;
    attachCookie({res, token});
    res.status(StatusCodes.OK).json({
        user,
        location: user.location
    })
}

const updateUser = async (req, res) => {
    const {email, name, lastName, location} = req.body;

    if (!email || !name || !lastName || !location) {
        throw new BadRequestError('Please provide all values');
    }

    const user = await User.findOne({_id: req.user.userId});

    user.email = email;
    user.name = name;
    user.lastName = lastName;
    user.location = location;

    await user.save();

    const token = user.createJWT();

    attachCookie({res, token});
    res.status(StatusCodes.OK).json({
        user,
        location: user.location
    });
}

const getCurrentUser = async (req, res) => {
    const user = await User.findOne({_id: req.user.userId});
    res.status(StatusCodes.OK).json({user, location:user.location});
}

const logout = async (req, res) => {
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