const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(bodyParser.urlencoded({ limit: '50mb', extended : true}));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cors());
app.use(logger('dev'));

app.disable('x-powered-by');

const routerAuth = require('./routes/auth');

app.use(routerAuth);

const API_PORT = process.env.API_PORT || 3000;
const AMBIENTE = process.env.NODE_ENV || 'production';

app.listen(API_PORT, () => {
  console.log(`API Integração MySQL
  Ambiente: ${AMBIENTE} PORTA: ${API_PORT}`);
});