'use strict'
const { functions, firestoreDb } = require('./init.js')
const express = require('express')
const app = express()

// public folder where public assets are stored
app.use(express.static('app'))

app.get('/', function (req, res) { // to use /index -> index.html
    res.sendFile('index.html', { root: __dirname + '/app' })
});

app.get('/about', function (req, res) { // to use /about -> about.html
    res.sendFile('about.html', { root: __dirname + '/app' })
});

app.get('/contact', function (req, res) { // to use /contact -> home.html
    res.sendFile('contact.html', { root: __dirname + '/app' })
});

app.get('/home', function (req, res) { // to use /home -> home.html
    res.sendFile('home.html', { root: __dirname + '/app' })
});

// for firestore testing purposes
firestoreDb.collection('Event').get().then(snapshot => {
    console.log('wait for it ...')
    snapshot.docs.forEach(doc => {
        console.log(JSON.stringify(doc.data()))
    });
})

// for local testing purposes
app.listen(3000, () => {
    console.log('\x1b[33m%s\x1b[0m', 'Coding Black Females website:\n');
    console.log('\x1b[33m%s\x1b[0m', 'http://localhost:3000')
});

exports.cbf = functions.https.onRequest(app);
