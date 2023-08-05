const { Pool } = require('pg');

const pool = new Pool({
  user: 'youruser',
  password: 'yourpassword',
  host: 'postgres',
  database: 'yourdatabase',
  port: 5432,
});

module.exports = pool;
