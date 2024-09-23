const pool = require('../models/db');

exports.submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await pool.query('INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)', [name, email, message]);
    res.status(200).json({ message: 'Contact submitted successfully' });
  } catch (err) {
    console.error("Error in submitting contact:", err);
    res.status(500).json({ error: err.message });
  }
};
