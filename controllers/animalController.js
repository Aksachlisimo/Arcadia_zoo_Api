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

// Create a new animal
exports.createAnimal = async (req, res) => {
  const { name, habitat, description } = req.body;

  // Validate input
  if (!name || !habitat || !description) {
    return res.status(400).json({ message: 'Name, habitat, and description are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO animals (name, habitat, description) VALUES ($1, $2, $3) RETURNING *',
      [name, habitat, description]
    );
    res.status(201).json(result.rows[0]); // Return the newly created animal
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing animal
exports.updateAnimal = async (req, res) => {
  const { id } = req.params;
  const { name, habitat, description } = req.body;

  try {
    const result = await pool.query(
      'UPDATE animals SET name = $1, habitat = $2, description = $3 WHERE id = $4 RETURNING *',
      [name, habitat, description, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(result.rows[0]); // Return the updated animal
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an animal
exports.deleteAnimal = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM animals WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.status(204).send(); // No content to send back
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
