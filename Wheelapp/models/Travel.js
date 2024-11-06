const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startPoint: { type: String, required: true },
  endPoint: { type: String, required: true },
  route: { type: String },
  departureTime: { type: Date, required: true },
  availableSeats: { type: Number, required: true },
  fare: { type: Number, required: true },
  passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Travel', TravelSchema);
