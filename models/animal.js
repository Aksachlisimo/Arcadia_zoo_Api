const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Animal's name
  breed: { type: String, required: true }, // Animal's breed
  images: [String], // Array of image URLs
  habitat: { type: String, required: true } // Habitat information
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
