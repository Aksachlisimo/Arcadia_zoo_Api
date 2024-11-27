const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }, // For storing image paths
  views: { type: Number, default: 0 } // To track the number of views
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal; // Export the model
