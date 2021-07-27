'use strict';

var express = require('express');
var connectDB = require('../config/db');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// Connect Database
connectDB();

// Intialize Middleware
app.use('/', function (req, res, next) {
    console.log('Time: %d', Date.now());
    next();
});
app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

app.get('/', function (req, res) {
    res.send('API Running');
});

// Define Routes
app.use('/api', require('.././routes/invoice'));
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/posts', require('./routes/api/posts'))


//Defing Port 
var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log('server started on port ' + PORT);
});
//# sourceMappingURL=app.js.map