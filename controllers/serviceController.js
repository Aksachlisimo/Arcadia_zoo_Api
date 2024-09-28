const pool = require('../models/db');

// Fetch all services
exports.getAllServices = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new service
exports.createService = async (req, res) => {
  const { name, description } = req.body;

  // Validate input
  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO services (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    res.status(201).json(result.rows[0]); // Return the newly created service
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
