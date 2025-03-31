const mongoose = require("mongoose");

const FlightFootprintSchema = new mongoose.Schema({
    passengers: { type: Number, required: true },
    legs: [{
        departure_airport: { type: String, required: true },
        destination_airport: { type: String, required: true }
    }],
    carbon_mt: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const FlightFootprint = mongoose.model("FlightFootprint", FlightFootprintSchema);

module.exports = { FlightFootprint };
