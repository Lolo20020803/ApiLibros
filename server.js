const res = require('express/lib/response');
const mysql = require('mysql');
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
  host     : process.env.DATABASE_URL,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASS,
  port     : process.env.DATABASE_PORT,
  database : "bookDataBase"
};

async function query(sql, params) {
  const connection = await mysql.createConnection(config);
  const [results, ] = await connection.execute(sql, params);
  return results;
}
module.exports = app;
