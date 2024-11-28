const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// Middleware
app.use(cors({
  origin: '*',  // Update this for production as needed
}));
app.use(express.json());  // Use express.json() instead of bodyParser

// Route files
const animalRoutes = require('./routes/animalRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Use routes
app.use('/api/animals', animalRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/register', userRoutes); // Adding register route
app.use('/api/login', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/contact', contactRoutes);

// Middleware for error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
