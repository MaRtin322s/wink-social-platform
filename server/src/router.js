const router = require('express').Router();
const authController = require('./controllers/authController');

router.use('/user', authController);

module.exports = router;