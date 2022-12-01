const router = require('express').Router();
const authService = require('../services/authService');

router.post('/register', async (req, res) => {
    const data = { 
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phone,
        address } = req.body;

    try {
        if (password === confirmPassword) {
            const user = await authService.registerUser(data);
            const token = await authService.generateToken(user);
            if (typeof user !== 'string') {
                res.json({
                    _id: user._id,
                    email: user.email,
                    accessToken: token
                });
            } else {
                throw {
                    message: user
                }
            }
        }
    } catch (err) {
        return err.message;
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email !== '' && password !== '') {
            const user = await authService.loginUser({ email, password });
            if (typeof user !== 'string') {
                const token = await authService.generateToken(user);
                res.json({
                    _id: user._id,
                    email: user.email,
                    accessToken: token
                })
            }
        }
    } catch (err) {
        return err.message;
    }
});

router.get('/logout', (req, res) => {
    if (req.headers['x-authorization']) {
        res.json({});
    }
});

router.get('/profile/:userId', async (req, res) => {
    const user = await authService.getOne(req.params.userId);
    res.json(user);
});

module.exports = router;