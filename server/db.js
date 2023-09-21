const mongoose = require('mongoose');

// MongoDB Atlas connection URI (replace with your own)
const mongoURI = process.env.MONGO_URI;

// Create a connection to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle MongoDB Atlas connection error
db.on('error', (err) => {
  console.error('MongoDB Atlas connection error:', err);
});

// Handle MongoDB Atlas connection success
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

module.exports = db;
