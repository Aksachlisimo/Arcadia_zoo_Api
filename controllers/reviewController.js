const pool = require('../models/db');

exports.submitReview = async (req, res) => {
  const { pseudo, review } = req.body;

  // Log the request body and database URL to verify data
  console.log('Attempting to submit review...');
  console.log('Database URL:', process.env.DATABASE_URL);  // Ensure the correct DB URL is loaded
  console.log('Request Body:', req.body);
  
  try {
    // Check the connection to the database
    const result = await pool.query('SELECT NOW()');
    console.log('Database connection successful:', result.rows);

    // Insert the review into the database
    await pool.query('INSERT INTO reviews (pseudo, review) VALUES ($1, $2)', [pseudo, review]);
    res.status(200).json({ message: 'Review submitted successfully' });

  } catch (err) {
    // Log the error and send it to the client
    console.error("Error in submitting review:", err);

    // Extra check if the error is related to the 'reviews' table
    if (err.code === '42P01') {
      console.error("The 'reviews' table doesn't exist. Ensure it's created and spelled correctly.");
    }

    res.status(500).json({ error: err.message });
  }
};
