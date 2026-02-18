const CropRecommendation = require('../models/CropRecommendation');

exports.getRecommendation = async (req, res) => {
  const { crop, soilType, season } = req.body;

  try {
    const result = await CropRecommendation.findOne({
      crop: crop,
      soilType: soilType,
      season: season,
    });

    if (!result) {
      return res.status(404).json({ message: 'No recommendation found' });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
