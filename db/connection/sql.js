const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

/*
    CREATE TABLE IF NOT EXISTS `customers` (
      id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
      email varchar(255) NOT NULL,
      name varchar(255) NOT NULL,
      active BOOLEAN DEFAULT false
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  */

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
