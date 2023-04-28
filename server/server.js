

const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

require('./config/environment');
require('./database');

const routes = require('./routes/index');
const configPassport  = require('./passport/config');

const app = express();
const assetFolder  = path.resolve(__dirname, '../dist/');

const PORT = process.env.PORT;

app.use(express.static(assetFolder));
app.use(bodyParser.json());

configPassport(app, express);

app.use('/', routes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
