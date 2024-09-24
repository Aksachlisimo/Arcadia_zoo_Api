const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Login route
router.post('/login', userController.login); // Use POST /api/login
router.post('/register', userController.register); 

module.exports = router;
