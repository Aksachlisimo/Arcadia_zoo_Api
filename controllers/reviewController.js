const pool = require('../models/db');

exports.createReview = async (req, res) => {
  const { pseudo, review } = req.body;
  try {
    await pool.query('INSERT INTO reviews (pseudo, review) VALUES ($1, $2)', [pseudo, review]);
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
