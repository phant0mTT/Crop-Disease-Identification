const mongoose = require('mongoose');
const CropRecommendation = require('./models/CropRecommendation');
const recommendations = require('./data/recommendations.json');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/crop-recommendation', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedDB = async () => {
  try {
    await CropRecommendation.deleteMany();
    await CropRecommendation.insertMany(recommendations);
    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    mongoose.connection.close();
  }
};

connectDB().then(() => {
  seedDB();
});