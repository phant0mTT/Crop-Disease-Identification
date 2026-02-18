const mongoose = require('mongoose');

const cropRecommendationSchema = new mongoose.Schema({
  crop: {
    type: String,
    required: true,
  },
  soilType: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  fertilizers: [{
    type: String,
    required: true,
  }],
  pesticides: [{
    type: String,
    required: true,
  }],
});

module.exports = mongoose.model('CropRecommendation', cropRecommendationSchema);