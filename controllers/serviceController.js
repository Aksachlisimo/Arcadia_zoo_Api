const pool = require('../models/db');

exports.getAllServices = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createService = async (req, res) => {
  const { name, description } = req.body;
  try {
    await pool.query('INSERT INTO services (name, description) VALUES ($1, $2)', [name, description]);
    res.status(201).json({ message: 'Service created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
