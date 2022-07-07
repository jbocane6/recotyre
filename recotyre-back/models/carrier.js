const mongoose = require('mongoose');

const carrierSchema = mongoose.Schema({
    companyName: { type: String, required: true },
    nit: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    contactPerson: { type: String, required: true },
    businessPosition: { type: String, required: true },
    cellPhone: { type: String, required: true },
    vehiclePlate: { type: String, required: true }
});

module.exports = mongoose.model('carriers', carrierSchema);
