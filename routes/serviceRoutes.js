const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Define routes
router.get('/', serviceController.getAllServices);

// Add POST route to create a new service
router.post('/', serviceController.createService);

module.exports = router;
