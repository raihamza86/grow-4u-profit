const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const walletRoutes = require("./routes/walletRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const withdrawRoutes = require("./routes/withdrawRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',  // your frontend origin
    credentials: true  // allow cookies
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/admin/settings', settingsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/withdraw', withdrawRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
