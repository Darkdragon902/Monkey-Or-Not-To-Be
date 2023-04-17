const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

require('./config/environment');
require('./database');

const routes = require('./routes/index');

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
