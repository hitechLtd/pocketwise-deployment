const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


async function registerUser(req ,res) {
    try  {
        const {fullName, email, password} = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const normalizedEmail = email.toLowerCase().trim();

        const existingUser = await User.findOne({
            email: normalizedEmail
        });
        if(existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user =  await User.create({
            fullName,
            email: normalizedEmail,
            password: hashedPassword
        })
        await user.save();
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        })
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
async function loginUser(req, res) {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }
        const normalizedEmail = email.toLowerCase().trim();
        const user = await User.findOne({
            email: normalizedEmail
        });
        if(!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const passwordMatches = await bcrypt.compare(password, user.password);
        if(!passwordMatches) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "2d"
            }
        );
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token
        })
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
// was meant for test purposes to see if the protectRoutes middleware is working correctly
async function getProfile(req, res) {
    return res.status(200).json({
        success: true,
        user: req.user
    })
}
module.exports = {registerUser, 
                loginUser,  
                getProfile};