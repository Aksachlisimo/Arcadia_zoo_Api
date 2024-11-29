const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register route
router.post('/register', userController.register); // POST /api/users/register

// Login route
router.post('/login', userController.login); // POST /api/users/login

module.exports = router;
