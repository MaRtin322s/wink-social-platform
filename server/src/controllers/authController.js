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

router.get('/logout', (req, res) => {
    if (req.headers['x-authorization']) {
        res.json({});
    }
});

module.exports = router;