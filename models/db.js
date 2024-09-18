const { Pool } = require('pg');
const bcryptjs = require('bcryptjs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


pool.on('connect', () => {
  console.log('PostgreSQL connected');
});

const hashPasswords = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT username, password FROM users');
    
    for (const user of result.rows) {
      const hashedPassword = await bcryptjs.hash(user.password, 10);
      await client.query('UPDATE users SET password = $1 WHERE username = $2', [hashedPassword, user.username]);
    }
    
    console.log('Passwords have been hashed and updated.');
    client.release();
  } catch (err) {
    console.error('Error hashing passwords', err.stack);
  }
};

hashPasswords();

module.exports = pool;
