const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.post('/', userController.login);
// Add more routes for user management

module.exports = router;
