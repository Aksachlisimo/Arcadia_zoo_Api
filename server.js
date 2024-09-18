const express = require('express');
const path = require('path');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
// const Animal = require('./models/animal');
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://aksachli:Aksachli2024@aksachli.vkwrx.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('MongoDB connection error:', err));


// Initialize PostgreSQL pool
const pool = require('./models/db'); // PostgreSQL pool setup


// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors({
  origin: 'https://arcadiazoo1.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));



// Body parser for JSON
app.use(express.json());



// Create a new animal
router.post('/animals', async (req, res) => {
  try {
    const animal = await Animal.create(req.body);
    res.status(201).json(animal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all animals
router.get('/animals', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update an animal
router.put('/animals/:id', async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(animal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an animal
router.delete('/animals/:id', async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    res.json(animal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Endpoint to increment view count
app.post('/increment-view/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const animal = await Animal.findById(id);
    if (animal) {
      animal.views += 1;
      await animal.save();
      res.status(200).json(animal);
    } else {
      res.status(404).json({ message: 'Animal not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;


//  endpoint to get all services
app.get('/services', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// Handle service modification
app.post('/services', async (req, res) => {
  const { name, description } = req.body;
  if (name && description) {
    try {
      await pool.query('INSERT INTO services (name, description) VALUES ($1, $2)', [name, description]);
      res.status(200).json({ message: 'Service added successfully' });
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ message: 'Server Error', error: err.message });
    }
  } else {
    res.status(400).json({ message: 'Missing fields' });
  }
});

// Handle contact form submission
app.post('/contact', async (req, res) => {
  const { title, description, email } = req.body;
  if (title && description && email) {
    try {
      await pool.query('INSERT INTO contact_forms (title, description, email) VALUES ($1, $2, $3)', [title, description, email]);
      res.status(200).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ message: 'Server Error', error: err.message });
    }
  } else {
    res.status(400).json({ message: 'Missing fields' });
  }
});

// Handle reviews submission
app.post('/reviews', async (req, res) => {
  const { pseudo, review } = req.body;

  if (pseudo && review) {
      try {
          await pool.query('INSERT INTO reviews (pseudo, review) VALUES ($1, $2)', [pseudo, review]);
          res.status(200).json({ message: 'Review submitted successfully' });
      } catch (err) {
          console.error('Error executing query', err.stack);
          res.status(500).json({ message: 'Server Error', error: err.message });
      }
  } else {
      res.status(400).json({ message: 'Missing fields' });
  }
});


// Handle user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcryptjs.compare(password, user.password);
      if (match) {
        // Authentication successful
        res.status(200).json({
          message: 'Login successful',
          role: user.role // Add role to the response
        });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});



//////////////////////////////////////////////////////////////////////

// Handle veterinarian reports submission
app.post('/vet-reports', async (req, res) => {
  const { animalId, reportDate, reportText } = req.body;

  if (!animalId || !reportDate || !reportText) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    await pool.query('INSERT INTO vet_reports (animal_id, report_date, report) VALUES ($1, $2, $3)', [animalId, reportDate, reportText]);
    res.status(200).json({ message: 'Rapport soumis avec succès' });
  } catch (error) {
    console.error('Erreur lors de la soumission du rapport', error.stack);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// Handle habitat comments submission
app.post('/habitat-comments', async (req, res) => {
  const { habitatId, commentText } = req.body;

  if (!habitatId || !commentText) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    await pool.query('INSERT INTO habitat_comments (habitat_id, comment) VALUES ($1, $2)', [habitatId, commentText]);
    res.status(200).json({ message: 'Commentaire soumis avec succès' });
  } catch (error) {
    console.error('Erreur lors de la soumission du commentaire', error.stack);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

// Handle feeding records submission
app.post('/feeding-records', async (req, res) => {
  const { animalId, feedingDate, feedingTime, foodType, foodQuantity } = req.body;

  if (!animalId || !feedingDate || !feedingTime || !foodType || !foodQuantity) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    await pool.query('INSERT INTO feeding_records (animal_id, feeding_date, feeding_time, food_type, food_quantity) VALUES ($1, $2, $3, $4, $5)', [animalId, feedingDate, feedingTime, foodType, foodQuantity]);
    res.status(200).json({ message: 'Enregistrement soumis avec succès' });
  } catch (error) {
    console.error('Erreur lors de la soumission de l’enregistrement de nourriture', error.stack);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
