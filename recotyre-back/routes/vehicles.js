const express = require('express');
const router = express.Router();
const dbClient = require('../utils/db');
const Vehicle = require('../models/vehicle');

router.get('/', (req, res) => {
    Vehicle.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:id', (req, res) => {
    Vehicle.findOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const vehicle = new Vehicle({
        type: req.body.type,
        brand: req.body.brand,
        model: req.body.model,
        vehiclePlate: req.body.vehiclePlate,
        capacity: req.body.capacity,
        heightDimensions: req.body.heightDimensions,
        widthDimensions: req.body.widthDimensions,
        lengthDimensions: req.body.lengthDimensions,
        lastMaintenanceDate: req.body.lastMaintenanceDate,
        technicalMechanicalExpiration: req.body.technicalMechanicalExpiration,
        soatExpiration: req.body.soatExpiration,
        fuelType: req.body.fuelType
    });

    vehicle.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:id', (req, res) => {
    Vehicle.updateOne({ _id: req.params.id },
        {
            $set: {
                type: req.body.type,
                brand: req.body.brand,
                model: req.body.model,
                vehiclePlate: req.body.vehiclePlate,
                capacity: req.body.capacity,
                heightDimensions: req.body.heightDimensions,
                widthDimensions: req.body.widthDimensions,
                lengthDimensions: req.body.lengthDimensions,
                lastMaintenanceDate: req.body.lastMaintenanceDate,
                technicalMechanicalExpiration: req.body.technicalMechanicalExpiration,
                soatExpiration: req.body.soatExpiration,
                fuelType: req.body.fuelType
            }
        }).then(data => {
            res.json(data);
        }).catch(e => {
            res.json({ message: e });
        });
});

router.delete('/:id', (req, res) => {
    Vehicle.deleteOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
