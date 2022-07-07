const mongoose = require('mongoose');

const tireSchema = mongoose.Schema({
    type: { type: String, required: true },
    rhine: { type: String, required: true },
    brand: { type: String, required: true },
    heightDimensions: { type: Number, required: true },
    widthDimensions: { type: Number, required: true },
    lengthDimensions: { type: Number, required: true },
    weight: { type: Number, required: true }
});

module.exports = mongoose.model('tire', tireSchema);
