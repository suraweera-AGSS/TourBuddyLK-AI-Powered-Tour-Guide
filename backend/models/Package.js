const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
  name: String,
  price: Number,
  duration: String,
  destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
  transport: String,
  accommodation: String
});

module.exports = mongoose.model('Package', PackageSchema);
