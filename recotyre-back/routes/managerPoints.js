const express = require('express');
const router = express.Router();
const dbClient = require('../utils/db');
const ManagerPoint = require('../models/managerPoint');

router.get('/', (req, res) => {
    ManagerPoint.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:id', (req, res) => {
    ManagerPoint.findOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const managerPoint = new ManagerPoint({
        shortId: req.body.shortId,
        managerName: req.body.managerName,
        nit: req.body.nit,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email,
        phone: req.body.phone,
        contactPerson: req.body.contactPerson,
        cellPhone: req.body.cellPhone,
        schedule: req.body.schedule
    });

    managerPoint.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:id', (req, res) => {
    ManagerPoint.updateOne({ _id: req.params.id },
        {
            $set: {
                shortId: req.body.shortId,
                managerName: req.body.managerName,
                nit: req.body.nit,
                address: req.body.address,
                city: req.body.city,
                email: req.body.email,
                phone: req.body.phone,
                contactPerson: req.body.contactPerson,
                cellPhone: req.body.cellPhone,
                schedule: req.body.schedule
            }
        }).then(data => {
            res.json(data);
        }).catch(e => {
            res.json({ message: e });
        });
});

router.delete('/:id', (req, res) => {
    ManagerPoint.deleteOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
