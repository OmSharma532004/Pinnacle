const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();



// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

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

// Import routes
const materialAdditionRoutes = require('./routes/MaterialAddition');

// Use routes
app.use('/api', materialAdditionRoutes);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
