const mongoose = require('mongoose');

const CarbonFootprintSchema = new mongoose.Schema({
  electricity_value: { type: Number, required: true },
  electricity_unit: { type: String, default: 'mwh' },
  carbon_mt: { type: Number, required: true }, // carbon emission in metric tons
  country: { type: String, required: true },
  state: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
  
});

const CarbonFootprint = mongoose.model('CarbonFootprint', CarbonFootprintSchema);

module.exports = {CarbonFootprint};
