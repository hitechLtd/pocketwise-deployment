require("dotenv").config();
// Forces Node.js to use Google & Cloudflare DNS
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require("./routes/auth.routes");
const transactionRouter = require('./routes/transaction.routes')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://127.0.0.1:5500",
      "http://localhost:5500",
    ],
    credentials: true,
  })
);

// health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Pocketwise API is running successfully!",
  });
});
// auth routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRouter)

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
