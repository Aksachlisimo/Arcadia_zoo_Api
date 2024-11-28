const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

require('dotenv').config();




// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(bodyParser.json());


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


// Start the server
app.listen(PORT, () => {
  console.log('Database URL:', process.env.DATABASE_URL);

  console.log(`Server is running on port ${PORT}`);
});
