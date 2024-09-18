const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Define routes
router.get('/', animalController.getAllAnimals);
// Add more routes for CRUD operations

module.exports = router;
