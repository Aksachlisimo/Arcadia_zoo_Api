const pool = require('../models/db');

// CRUD operations for animals
exports.getAllAnimals = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM animals');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add more functions for other CRUD operations
