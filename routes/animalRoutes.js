const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Define routes
router.get('/', animalController.getAllAnimals);

// Add POST route for creating a new animal
router.post('/', animalController.createAnimal);

// Add PUT route for updating an existing animal
router.put('/:id', animalController.updateAnimal);

// Add DELETE route for removing an animal
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;
