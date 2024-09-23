const { Pool } = require('pg');

// Log the current environment for clarity
console.log('Environment:', process.env.NODE_ENV);
console.log('Connecting to database:', process.env.DATABASE_URL);

// Create a new PostgreSQL client
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' 
    ? { rejectUnauthorized: false }  // Enforce SSL in production
    : false  // Disable SSL in development
});

// Log pool status
pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Error connecting to the database:', err);
});

module.exports = pool;
