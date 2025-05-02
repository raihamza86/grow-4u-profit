const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const walletRoutes = require("./routes/walletRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',  // your frontend origin
    credentials: true  // allow cookies
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/settings', settingsRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
