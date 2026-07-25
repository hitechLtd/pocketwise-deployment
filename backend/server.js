require('dotenv').config();
// Forces Node.js to use Google & Cloudflare DNS
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); 

const express = require('express');
const connectDB = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;

// health check

app.get('/', (req, res)=> {
    res.json({
        success: true,
        message:'Pocketwise API is running successfully!'
    })
})

async function startServer() {
    await connectDB();

    
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});
}
startServer();