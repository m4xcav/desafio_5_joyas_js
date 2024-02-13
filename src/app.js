require('./database/dbindex');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/routesindex');

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/', routes);
module.exports = app;
