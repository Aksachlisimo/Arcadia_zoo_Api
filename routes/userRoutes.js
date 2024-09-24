const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Login route
router.post('/api/login', userController.login); // Use POST /api/login
router.post('/api/register', userController.register); 

module.exports = router;
