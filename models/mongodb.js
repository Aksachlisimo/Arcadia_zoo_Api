const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  images: [String],
  habitat: { type: String, required: true },
  views: { type: Number, default: 0 }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
