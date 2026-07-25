const express = require("express");
const router = express.Router();
const {registerUser, 
        loginUser,
        getProfile,
        forgotPassword,
        resetPassword } =  require('../controllers/auth.controller');
const {protectRoutes} = require('../middleware/auth.middleware')


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protectRoutes, getProfile);
router.get('/forgot-password', forgotPassword );
<<<<<<< HEAD
router.post('/reset-password/:token', resetPassword);
=======
router.post('/reset-password/:token', resetPassword)
>>>>>>> origin/feature/ai-insights
module.exports = router;