const express = require('express');
const app = express();
const config = require('./config');
const log4js = require('log4js');

var logger = log4js.getLogger();
logger.level = 'debug';

app.get('/', function (req, res) {
  res.send('Hello World')
});

const port = config.get('port');

app.listen(port, () => logger.info(`pubmed api server listening on port ${port}`));
