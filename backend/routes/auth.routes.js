const express = require("express");
const router = express.Router();
const {registerUser, 
        loginUser,
        getProfile } =  require('../controllers/auth.controller');
const {protectRoutes} = require('../middleware/auth.middleware')


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protectRoutes, getProfile);
module.exports = router;