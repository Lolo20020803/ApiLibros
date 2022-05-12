const sql = require('mssql');
const app = require('./app');
require('dotenv').config();
/*
const PORT = process.env.PORT || 3000; // Port assign
const db = process.env.MONGO_URI || 'mongodb://localhost:27017/ApiLibros'; // Database Location

mongoose.connect(db, (err) => {
  if (err) console.log(`Cant connect to database. Error: ${err}`);
  else app.listen(PORT, () => { console.log(`Node server running on http://localhost:${PORT} using the db:${db}`); });
});
*/
const config = {
  "user": 'admin', // default is sa
  "password": process.env.PASS,
  "server": process.env.URL + ':' + process.env.PORT,
  "database": "bookdatabase", // name of database
  "options": {
      "encrypt": true
  }
}
sql.connect(config, err => {
  if (err) {
    console.log('Error connecting data base');
  };
  console.log('Conection correct');
  app.listen(process.env.PORT, () => {console.log(`Node Server running in ${config.server}`)});
});
module.exports = app;
