// src/db.ts
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost", // Ganti dengan host MySQL Anda
  user: "root",      // Ganti dengan username MySQL Anda
  password: "", // Ganti dengan password MySQL Anda
  database: "bids", // Ganti dengan nama database Anda
});

export default db;
