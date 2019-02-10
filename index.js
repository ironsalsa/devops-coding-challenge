const debug = require('debug')('spb:server');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// ==================== OPTIONS ==================== //
// Please set these as environmental varaibles at runtime. Without setting HELLO_GREETING, the app will provide a default output.

const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || 80;
const HELLO_GREETING = process.env.API_PORT || 'Failed: this must be set at runtime, and you did not set it.'

// ==================== EXPRESS SERVER SETUP ==================== //

const app = express();
app.use(morgan('dev'));
app.use(cors());

// ==================== ROUTING ==================== //

// app.use('/oldendpoint',
// 	function(req, res) {
// 		res.status(200);
// 		debug("Providing hello.")
// 		res.json(deviceList);
// });

app.get('/hello', cors(), function(req, res) {
  debug("Hello requested.")
	res.status(200);
	res.json({ hello: ${HELLO_GREETING} });
});

app.use('/', function (req, res) {
	debug("Status call provided.")
	res.status(200).end();
});

app.listen({
	port: API_PORT,
	hostname: API_HOST
}, debug(`API listening on ${API_PORT}`));
