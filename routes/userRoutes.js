const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register route
router.post('/', userController.register); // POST /api/register

// Login route
router.post('/', userController.login); // POST /api/login

module.exports = router;
