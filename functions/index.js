const functions = require('firebase-functions');
const express = require('express')
const app = express()

exports.cbf = functions.https.onRequest(app);
