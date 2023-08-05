const { Pool } = require('pg');

const pool = new Pool({
  user: 'myuser',
  password: 'g18piF18',
  host: 'localhost',
  database: 'mydatabase',
  port: 5432,
});

module.exports = pool;
