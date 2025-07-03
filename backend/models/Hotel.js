const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: String,
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
  price: Number,
  features: [String],
  bookingLink: String,
  rating: Number
});

module.exports = mongoose.model('Hotel', HotelSchema);
