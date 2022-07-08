const express = require('express');
const router = express.Router();
const dbClient = require('../utils/db');
const Carrier = require('../models/carrier');

router.get('/', (req, res) => {
    Carrier.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:id', (req, res) => {
    Carrier.findOne({ id: req.params._id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const carrier = new Carrier({
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

    carrier.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:id', (req, res) => {
    Carrier.updateOne({ _id: req.params.id },
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

router.delete('/:id', (req, res) => {
    Carrier.deleteOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
