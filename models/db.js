const { Pool } = require('pg');

// Log the current environment for clarity
console.log('Environment:', process.env.NODE_ENV);
console.log('Connecting to database:', process.env.DATABASE_URL);


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


// Log pool status
pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Error connecting to the database:', err);
});

module.exports = pool;
