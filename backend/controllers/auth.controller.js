const bcrypt = require('bcrypt');
const User = require('../models/User');


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
module.exports = {registerUser};