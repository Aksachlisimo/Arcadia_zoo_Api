const pool = require('../models/db');

exports.createAnimal = async (req, res) => {
  try {
    const { name, species, habitat } = req.body;
    const result = await pool.query('INSERT INTO animals (name, species, habitat) VALUES ($1, $2, $3) RETURNING *', [name, species, habitat]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllAnimals = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM animals');
    res.json(result.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, species, habitat } = req.body;
    const result = await pool.query('UPDATE animals SET name = $1, species = $2, habitat = $3 WHERE id = $4 RETURNING *', [name, species, habitat, id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM animals WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.incrementView = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('UPDATE animals SET views = views + 1 WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ message: 'Animal not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
