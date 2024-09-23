const pool = require('../models/db');

exports.submitReview = async (req, res) => {
  const { pseudo, review } = req.body;

  // Log the request body to verify data
  console.log("Request Body:", req.body);

  try {
    await pool.query('INSERT INTO reviews (pseudo, review) VALUES ($1, $2)', [pseudo, review]);
    res.status(200).json({ message: 'Review submitted successfully' });
  } catch (err) {
    console.error("Error in submitting review:", err);  // Log the actual error
    res.status(500).json({ error: err.message });
  }
};
