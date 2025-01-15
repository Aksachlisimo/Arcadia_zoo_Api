// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

/**
 * Middleware pour authentifier les utilisateurs via JWT.
 * Vérifie la présence et la validité du token dans l'en-tête Authorization.
 */
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // Le token est généralement envoyé sous la forme "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Accès refusé. Token manquant.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide ou expiré.' });
    }
    req.user = user; // Ajoute les informations de l'utilisateur à la requête
    next();
  });
};

module.exports = authenticateToken;