const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const tf = require('@tensorflow/tfjs-node');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB connection (replace with your actual connection string)
mongoose.connect('mongodb://localhost/student_recognition', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
app.use('/api/students', require('./routes/students'));
app.use('/api/achievements', require('./routes/achievements'));
app.use('/api/rankings', require('./routes/rankings'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));