const mongoose = require('mongoose');

const collectionPointSchema = mongoose.Schema({
    shortId: { type: String, required: true },
    pointName: { type: String, required: true },
    nit: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    contactPerson: { type: String, required: true },
    cellPhone: { type: String, required: true },
    schedule: { type: String, required: true }
});

module.exports = mongoose.model('collectionPoint', collectionPointSchema);
