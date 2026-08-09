const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const UserApiRoutes = require('./userRoutes/userRoutes.js');
const AdminRoutes = require('./adminRoutes/adminRoutes.js')
const paymentRoutes = require('./routes/payment.js');
const { connectDB } = require('./config/dbconfig.js');
const windowsAppRoutes = require('./winAppRoutes/windowsAppRoutes.js');
const subscriptionRoutes = require('./routes/subscriptionRoutes.js');
const adminAuthMiddleware = require('./middleware/adminAuthMiddleware.js');

connectDB();
const app = express();
const port = process.env.PORT || 5000;





// SERVER CODE
app.use(cors({origin: true, credentials: true,}));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Mount modular API routes
app.get('/health', (req, res) => {
  res.status(200).send('server is live');
})


// Admin HTML (must come before Admin API routes to avoid conflicts)
const adminPath = path.join(__dirname, 'Admin', 'browser');
app.use('/adminpanel', express.static(adminPath));

app.get('/adminpanel', (req, res) => {
    res.sendFile(path.join(adminPath, 'index.html'));
});

app.use('/api', UserApiRoutes);
app.use('/admin', AdminRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/subscription', subscriptionRoutes);













// WINDOWS APPLICATION CODE

app.use('/api/windows', require('./winAppRoutes/windowsAppRoutes.js'));

















// Serve User Angular
const frontendDistPath = path.join(__dirname, 'speedtap', 'browser');
app.use(express.static(frontendDistPath));

// Angular fallback: return the correct index.html based on path
app.use((req, res) => {
    // If the request starts with /adminpanel, serve the Admin app
    if (req.path.startsWith('/adminpanel')) {
        return res.sendFile(path.join(adminPath, 'index.html'));
    }
    // Otherwise serve the User (SpeedTap) app
    res.sendFile(path.join(frontendDistPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});

