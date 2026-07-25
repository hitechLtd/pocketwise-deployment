const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        passwordResetToken :{
            type: String,
            default: undefined,
        },
        passwordResetExpire: {
            type: Date,
            default: undefined,
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model('User', userSchema);