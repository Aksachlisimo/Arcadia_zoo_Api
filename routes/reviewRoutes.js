const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const reviewController = require('../controllers/reviewController');

// Route protégée pour ajouter un avis avec validation simplifiée
router.post(
  '/',
  authenticateToken,
  [
    // Vérifie si 'avis' est fourni
    check('avis').notEmpty().withMessage('L\'avis est requis'),
  ],
  (req, res, next) => {
    // Vérifie les erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // Passe à reviewController.addReview s'il n'y a pas d'erreurs de validation
  },
  reviewController.addReview
);

module.exports = router;
