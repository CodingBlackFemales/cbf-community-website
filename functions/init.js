"use strict";

const admin = require("firebase-admin");
const functions = require("firebase-functions");

// Since this code will be running in the Cloud Functions environment
// we call initialise Firestore without any arguments because it
// detects authentication from the environment. source: https://github.com/firebase/functions-samples/blob/6c284a689c484ac4395fde1a8e8d6c2731705b55/presence-firestore/functions/index.js
admin.initializeApp();

// initialise firestore db
const firestoreDb = admin.firestore();

module.exports = { firestoreDb, functions };
