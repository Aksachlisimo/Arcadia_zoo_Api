const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/arcadia_zoo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0 // Initialize views to 0
  }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
