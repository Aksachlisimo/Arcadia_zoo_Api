const pool = require('../models/db');

// CRUD operations for reviews
exports.submitReview = async (req, res) => {
  const { pseudo, review } = req.body;
  try {
    await pool.query('INSERT INTO reviews (pseudo, review) VALUES ($1, $2)', [pseudo, review]);
    res.status(200).json({ message: 'Review submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add more functions for other review operations
