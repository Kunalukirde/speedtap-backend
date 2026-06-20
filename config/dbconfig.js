const mongoose = require('mongoose');


async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Missing env var MONGODB_URI');
  }

  const options = {
    // Keep compatible with older mongoose versions
    dbName: process.env.MONGODB_DBNAME,
  };

  // Reconnect-safe
  if (mongoose.connection.readyState === 1) return mongoose.connection;

  await mongoose.connect(uri, options);
  console.log('Datatbase connected');
  return mongoose.connection;
}

module.exports = {
  connectDB,
};

