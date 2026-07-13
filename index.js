const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const UserApiRoutes = require('./userRoutes/userRoutes.js');
const paymentRoutes = require('./routes/payment.js');
const { connectDB } = require('./config/dbconfig.js');
const windowsAppRoutes = require('./winAppRoutes/windowsAppRoutes.js');
const subscriptionRoutes = require('./routes/subscriptionRoutes.js');

connectDB();
const app = express();
const port = process.env.PORT || 5000;





// SERVER CODE
app.use(cors({origin: true, credentials: true,}));
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))
);





// Mount modular API routes
app.get('/health', (req, res) => {
  res.send('server is live');
})
app.use('/api', UserApiRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/subscription', subscriptionRoutes);













// WINDOWS APPLICATION CODE

app.use('/api/windows', require('./winAppRoutes/windowsAppRoutes.js'));



















// Serve Angular
const frontendDistPath = path.join(__dirname, 'speedtap', 'browser');
app.use(express.static(frontendDistPath));
app.use((req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});

