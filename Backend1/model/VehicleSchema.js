const mongoose = require('mongoose');

const VehicleFootprintSchema = new mongoose.Schema({
  distance_value: {
    type: Number,
    required: true,
  },
  distance_unit: {
    type: String,
    default: 'mi',
  },
  vehicle_model_id: {
    type: String,
    required: true,
  },
  carbon_mt: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const VehicleFootprint = mongoose.model('VehicleFootprint', VehicleFootprintSchema);

module.exports = { VehicleFootprint };
