const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');
// Importez d'autres contrôleurs et modèles nécessaires

// Définissez vos routes
router.post('/users', UserController.createUser);
router.get('/users', UserController.getUsers);
// Ajoutez d'autres routes pour les autres fonctionnalités de votre application

module.exports = router;
