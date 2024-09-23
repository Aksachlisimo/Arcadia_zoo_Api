const { Pool } = require('pg');

// Create a new PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false // Use SSL only in production
});


module.exports = pool;
