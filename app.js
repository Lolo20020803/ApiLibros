const express = require('express');

const userPath = require('./routes/userRoutes');
const bookPath = require('./routes/bookRoute');
const autorPath = require('./routes/autorRoute');

const { standar } = require('./controllers/userController');

const app = express();

// Determinate we use json files
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/user', userPath);
app.use('/book', bookPath);
app.use('/autor', autorPath);
// Main page of the API
app.use('/', standar);

module.exports = app;
