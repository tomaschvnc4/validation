const express = require('express');
// const mysql = require('mysql');
const mysql = require('mysql2');

const db = mysql.createPool({
   host: 'localhost',
   user: 'tomas',
   password: 'tomas',
   database: 'cruddb1',
});

module.exports = db;

/**
 
in database i hava simple table with columns id, name, second

 */
