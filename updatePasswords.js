require('dotenv').config();  // Add this at the top

const bcrypt = require('bcryptjs');
const pool = require('./models/db'); // Adjust the path as necessary

const updateUserPasswords = async () => {
    try {
        const users = await pool.query('SELECT * FROM users');
        for (const user of users.rows) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            await pool.query(
                'UPDATE users SET password = $1 WHERE id = $2',
                [hashedPassword, user.id]
            );
            console.log(`Updated password for user: ${user.username}`);
        }
    } catch (error) {
        console.error('Error updating passwords:', error);
    }
};

updateUserPasswords();
