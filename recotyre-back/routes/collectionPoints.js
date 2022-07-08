const express = require('express');
const router = express.Router();
const dbClient = require('../utils/db');
const CollectionPoint = require('../models/collectionPoint');

router.get('/', (req, res) => {
    CollectionPoint.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:id', (req, res) => {
    CollectionPoint.findOne({ id: req.params._id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const collectionPoint = new CollectionPoint({
        shortId: req.body.shortId,
        pointName: req.body.pointName,
        nit: req.body.nit,
        address: req.body.address,
        city: req.body.city,
        email: req.body.email,
        phone: req.body.phone,
        contactPerson: req.body.contactPerson,
        cellPhone: req.body.cellPhone,
        schedule: req.body.schedule
    });

    collectionPoint.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:id', (req, res) => {
    CollectionPoint.updateOne({ _id: req.params.id },
        {
            $set: {
                shortId: req.body.shortId,
                pointName: req.body.pointName,
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
    CollectionPoint.deleteOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
