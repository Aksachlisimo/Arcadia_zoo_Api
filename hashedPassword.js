const bcrypt = require('bcryptjs');

const password = 'EmployeePassword2024@@'; // The password you want to hash

const hashPassword = async () => {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`Hashed Password: ${hashedPassword}`);
};

hashPassword();
