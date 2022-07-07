const express = require('express');
const router = express.Router();
const dbClient = require('../utils/db');
const Collector = require('../models/collector');

router.get('/', (req, res) => {
    Collector.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:nit', (req, res) => {
    Collector.findOne({ nit: req.params.nit }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const Collector = new Collector({
        companyName: req.body.companyName,
        nit: req.body.nit,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email,
        phone: req.body.phone,
        contactPerson: req.body.contactPerson,
        businessPosition: req.body.businessPosition,
        cellPhone: req.body.cellPhone,
        vehiclePlate: req.body.vehiclePlate
    });

    Collector.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:nit', (req, res) => {
    Collector.updateOne({ nit: req.params.nit },
        {
            $set: {
                companyName: req.body.companyName,
                nit: req.body.nit,
                address: req.body.address,
                city: req.body.city,
                email: req.body.email,
                phone: req.body.phone,
                contactPerson: req.body.contactPerson,
                businessPosition: req.body.businessPosition,
                cellPhone: req.body.cellPhone,
                vehiclePlate: req.body.vehiclePlate
            }
        }).then(data => {
            res.json(data);
        }).catch(e => {
            res.json({ message: e });
        });
});

router.delete('/:nit', (req, res) => {
    Collector.deleteOne({ nit: req.params.nit }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
