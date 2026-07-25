const express = require("express");
const router = express.Router();
const {registerUser, 
        loginUser,
        getProfile,
        forgotPassword } =  require('../controllers/auth.controller');
const {protectRoutes} = require('../middleware/auth.middleware')


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protectRoutes, getProfile);
router.get('/forgot-password', protectRoutes,forgotPassword )
module.exports = router;