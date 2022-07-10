const express = require('express');
const router = express.Router();
const dbClient = require('../utils/db');
const FinalManager = require('../models/finalManager');

router.get('/', (req, res) => {
    FinalManager.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:id', (req, res) => {
    FinalManager.findOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const finalManager = new FinalManager({
        companyName: req.body.companyName,
        nit: req.body.nit,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email,
        phone: req.body.phone,
        contactPerson: req.body.contactPerson,
        businessPosition: req.body.businessPosition,
        cellPhone: req.body.cellPhone,
        managerPointId: req.body.managerPointId
    });

    finalManager.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:id', (req, res) => {
    FinalManager.updateOne({ _id: req.params.id },
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
                managerPointId: req.body.managerPointId
            }
        }).then(data => {
            res.json(data);
        }).catch(e => {
            res.json({ message: e });
        });
});

router.delete('/:id', (req, res) => {
    FinalManager.deleteOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
