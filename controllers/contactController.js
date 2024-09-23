const pool = require('../models/db');

exports.submitContact = async (req, res) => {
    const { title, description, email } = req.body;
  
    // Log the request body to verify data
    console.log('Attempting to submit contact...');
    console.log('Request Body:', req.body);
  
    try {
      await pool.query('INSERT INTO contacts (title, description, email) VALUES ($1, $2, $3)', [title, description, email]);
      res.status(200).json({ message: 'Contact submitted successfully' });
    } catch (err) {
      console.error("Error in submitting contact:", err);
      res.status(500).json({ error: err.message });
    }
  };
  