const express = require('express');
const router = express.Router();
const Carrier = require('../models/carrier');

router.get('/', (req, res) => {
    Carrier.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:nit', (req, res) => {
    Carrier.findOne({ nit: req.params.nit }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const Carrier = new Carrier({
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

    Carrier.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:nit', (req, res) => {
    Carrier.updateOne({ nit: req.params.nit },
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
    Carrier.deleteOne({ nit: req.params.nit }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
