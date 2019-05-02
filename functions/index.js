const functions = require('firebase-functions');
const express = require('express')
const app = express()

const path = require('path'); //uncomment to use .html
// const cons = require('consolidate'); //uncomment to use .html

// public folder where public assets are stored
app.use(express.static(path.join('../', 'app')))

// to use index.html, about.html, contact.html, home.html
// uncomment to use .html
// view engine setup
// app.engine('html', cons.swig)
// app.set('views', path.join(__dirname, 'app'));
// app.set('view engine', 'html');

// comment out below until *end* to use the ".html" extension example above
app.get('/', function (req, res) { // to use /index -> index.html
    res.sendFile('index.html', { root: '../'+ 'app' })
});

app.get('/about', function (req, res) { // to use /about -> about.html
    res.sendFile('about.html', { root: '../'+ 'app' })
});

app.get('/contact', function (req, res) { // to use /contact -> home.html
    res.sendFile('contact.html', { root: '../'+ 'app' })
});

app.get('/home', function (req, res) { // to use /home -> home.html
    res.sendFile('home.html', { root: '../'+ 'app' })
});
// *end*

exports.cbf = functions.https.onRequest(app);
