const { SALT_ROUNDS, SECRET } = require('../../config/constants');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const jwtSign = promisify(jwt.sign);

exports.registerUser = async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (user) {
        return 'User already registered!';
    } else {
        const hashedPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);
        const user = await User.create({ ...userData, password: hashedPassword });
        return user;
    }
}

exports.loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    const isValid = await bcrypt.compare(password, user.password);

    if (isValid) {
        return user;
    } else {
        return 'Invalid username or password!';
    }
}

exports.generateToken = async (user) => {
    const token = await jwtSign({ _id: user._id }, SECRET, { expiresIn: '2h' });
    return token;
}