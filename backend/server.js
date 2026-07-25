require('dotenv').config();
// Forces Node.js to use Google & Cloudflare DNS
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); 
<<<<<<< HEAD
const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors')
const authRoutes = require('./routes/auth.routes');
const transactionRoutes = require('./routes/transaction.routes');
=======

const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth.routes');
>>>>>>> origin/feature/ai-insights
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
<<<<<<< HEAD

app.use(cors({
  origin: [
    "http://localhost:5500",
    "http://127.0.0.1:5500"
  ]
}))
=======
>>>>>>> origin/feature/ai-insights
// health check
app.get('/', (req, res)=> {
    res.json({
        success: true,
        message:'Pocketwise API is running successfully!'
    })
});
// auth routes
app.use('/api/auth', authRoutes);
<<<<<<< HEAD
// transaction routes
app.use('/api/', transactionRoutes)
=======
>>>>>>> origin/feature/ai-insights

async function startServer() {
    await connectDB();

    
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});
}
startServer();