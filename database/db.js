/* importing mysql2 */
const mysql = require("mysql2");

/* db connection with mysql2 */
module.exports = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //<--using enviroment variables
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  });
};

