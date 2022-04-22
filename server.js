const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000; // Port assign
const db = process.env.MONGO_URI || 'mongodb://localhost:27017/ApiLibros'; // Database Location

mongoose.connect(db, (err) => {
  if (err) console.log(`Cant connect to database. Error: ${err}`);
  else app.listen(PORT, () => { console.log(`Node server running on http://localhost:${PORT} using the db:${db}`); });
});

module.exports = app;
