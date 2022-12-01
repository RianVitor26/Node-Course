const express = require("express");
const mysql = require("mysql2");
const port = 3000;
const server = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "olamysql",
  database: "teste",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Conectou ao Mysql");
    server.listen(port, () => console.log(`http://localhost:${port}`));
  }
});
