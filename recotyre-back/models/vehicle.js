const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    type: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    vehiclePlate: { type: String, required: true },
    capacity: { type: Number, required: true },
    heightDimensions: { type: Number, required: true },
    widthDimensions: { type: Number, required: true },
    lengthDimensions: { type: Number, required: true },
    lastMaintenanceDate: { type: Date, required: true, default: Date.now },
    technicalMechanicalExpiration: { type: Date, required: true, default: Date.now },
    soatExpiration: { type: Date, required: true, default: Date.now },
    fuelType: { type: String, required: true }
});

module.exports = mongoose.model('vehicles', vehicleSchema);
