const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const carriersRoute = require('./routes/carriers');
const collectionPointsRoute = require('./routes/collectionPoints');
const collectorsRoute = require('./routes/collectors');
const finalManagersRoute = require('./routes/finalManagers');
const managerPointsRoute = require('./routes/managerPoints');
const tiresRoute = require('./routes/tires');
const vehiclesRoute = require('./routes/vehicles');

const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`Server running on port ${port}`); });

app.use(cors());
app.use(bodyParser.json());

app.use('/carriers', carriersRoute);
app.use('/collectionPoints', collectionPointsRoute);
app.use('/collectors', collectorsRoute);
app.use('/finalManagers', finalManagersRoute);
app.use('/managerPoints', managerPointsRoute);
app.use('/tires', tiresRoute);
app.use('/vehicles', vehiclesRoute);

module.exports = app;
