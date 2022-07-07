const express = require('express');
const router = express.Router();
const FinalManager = require('../models/finalManager');

router.get('/', (req, res) => {
    FinalManager.find().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.get('/:nit', (req, res) => {
    FinalManager.findOne({ nit: req.params.nit }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.post('/create', (req, res) => {
    const FinalManager = new FinalManager({
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

    FinalManager.save().then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

router.patch('/:nit', (req, res) => {
    FinalManager.updateOne({ nit: req.params.nit },
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

router.delete('/:nit', (req, res) => {
    FinalManager.deleteOne({ nit: req.params.nit }).then(data => {
        res.json(data);
    }).catch(e => {
        res.json({ message: e });
    });
});

module.exports = router;
