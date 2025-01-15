// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const https = require('https');
const fs = require('fs');

const sslOptions = {
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt')
};

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Serveur HTTPS en cours d'exécution sur le port ${PORT}`);
});

require('dotenv').config();

// Middleware
app.use(cors({
  origin: '*',  // Mettre à jour en production selon les besoins
}));
app.use(express.json());  // Utilise express.json() au lieu de bodyParser

// Importation des fichiers de routes
const animalRoutes = require('./routes/animalRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Importation du middleware d'authentification
const authenticateToken = require('./middleware/authMiddleware');

// Utilisation des routes
app.use('/api/animals', animalRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/register', userRoutes); // Route d'enregistrement
app.use('/api/login', userRoutes);    // Route de connexion

// Routes protégées nécessitant une authentification
app.use('/api/reviews', authenticateToken, reviewRoutes);
app.use('/api/contact', authenticateToken, contactRoutes);

// Middleware pour la gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose a mal tourné !');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});