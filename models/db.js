const { Pool } = require('pg');

// Create a new PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this is set in your environment variables
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
