const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Define routes
router.get('/', serviceController.getAllServices);
// Add more routes for CRUD operations

module.exports = router;
