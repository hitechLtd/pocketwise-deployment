const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONG_URI);
        Boolean(process.env.MONGODB_URI)
        console.log('MongooDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;

