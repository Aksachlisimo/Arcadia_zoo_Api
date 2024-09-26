const pool = require('../models/db');
const bcrypt = require('bcryptjs');

// Handle user registration
exports.register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log('Hashed password:', hashedPassword); // <-- Add this line


        // Insert the new user into the database with the hashed password
        const result = await pool.query(
            'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
            [username, hashedPassword, role]
        );

        res.status(201).json({ message: 'User created successfully', user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Handle user login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
      const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
      console.log('Query result:', result.rows); // Log the result of the query

      if (result.rows.length > 0) {
          const user = result.rows[0];
          console.log('User found:', user); // Log the user found
          const match = await bcrypt.compare(password, user.password);
          console.log('Password match:', match); // Log the result of password comparison
          if (match) {
              res.status(200).json({ message: 'Login successful', role: user.role });
          } else {
              res.status(401).json({ message: 'Invalid username or password' });
          }
      } else {
          res.status(401).json({ message: 'Invalid username or password' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};
