const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const UserApiRoutes = require('./userRoutes/userRoutes.js');
const { connectDB } = require('./config/dbconfig.js');

// Load env vars before connecting DB
connectDB();

const app = express();
const port = process.env.PORT || 4000;

const frontendDistPath = path.join(__dirname, 'auto_apply', 'browser');

app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());

// Mount modular API routes
app.use('/api', UserApiRoutes);

// Serve frontend
app.use(express.static(frontendDistPath));

// SPA fallback: for any non-file route, return index.html
app.use((req, res) => {
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});



