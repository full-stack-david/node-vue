'use strict';
require('dotenv').config();
const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Working');
});

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`app listening at ` + process.env.DOMAIN + `:${port}`);
});
