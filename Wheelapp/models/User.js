const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  universityId: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
  contactNumber: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['passenger', 'driver'], default: 'passenger' },
  vehicle: {
    plate: { type: String },
    photo: { type: String },
    capacity: { type: Number },
    soatPhoto: { type: String },
    brand: { type: String },
    model: { type: String },
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
