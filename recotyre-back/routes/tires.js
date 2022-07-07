const express = require('express');
const router = express.Router();
const dbClient = require('../utils/db');
const Tire = require('../models/tire');

router.get('/', (req, res) => {
    Tire.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:id', (req, res) => {
    Tire.findOne({ id: req.params._id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const tire = new Tire({
        type: req.body.type,
        rhine: req.body.rhine,
        brand: req.body.brand,
        heightDimensions: req.body.heightDimensions,
        widthDimensions: req.body.widthDimensions,
        lengthDimensions: req.body.lengthDimensions,
        weight: req.body.weight
    });

    tire.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:id', (req, res) => {
    Tire.updateOne({ _id: req.params.id },
        {
            $set: {
                type: req.body.type,
                rhine: req.body.rhine,
                brand: req.body.brand,
                heightDimensions: req.body.heightDimensions,
                widthDimensions: req.body.widthDimensions,
                lengthDimensions: req.body.lengthDimensions,
                weight: req.body.weight
            }
        }).then(data => {
            res.json(data);
        }).catch(e => {
            res.json({ message: e });
        });
});

router.delete('/:id', (req, res) => {
    Tire.deleteOne({ _id: req.params.id }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
