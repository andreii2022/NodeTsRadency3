const { Pool } = require('pg');

const pool = new Pool({
  user: 'youruser',
  password: 'yourpassword',
  host: 'postgres', // Це ім'я контейнера PostgreSQL у мережі Docker
  database: 'yourdatabase',
  port: 5432,
});

module.exports = pool;
