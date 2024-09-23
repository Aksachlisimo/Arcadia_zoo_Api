const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes');



// Connect to PostgreSQL
const pool = require('./models/db');
console.log('Database URL:', process.env.DATABASE_URL);

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Route files
const animalRoutes = require('./routes/animalRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const contactController = require('./controllers/contactController');


// Use routes
app.use('/api/animals', animalRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.post('/api/contact', contactController.submitContact);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
