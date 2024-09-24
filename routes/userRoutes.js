const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Login route
router.post('/', userController.login); // Use POST /api/login

module.exports = router;
