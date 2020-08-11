const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name Cannot be Null'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'duration Cannot be Null'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'group size Cannot be Null'],
  },
  difficulty: {
    type: String,
    required: [true, 'difficulty Cannot be Null'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'price Cannot be Null'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'summary Cannot be Null'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'description Cannot be Null'],
  },
  imageCover: {
    type: String,
    required: [true, 'Image Cove Cannot be Null'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
