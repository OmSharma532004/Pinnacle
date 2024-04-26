const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const dotenv=require('dotenv');
dotenv.config();



// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const uri = process.env.MONGODB_URL;  
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

// Import routes
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api', authRoutes);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
