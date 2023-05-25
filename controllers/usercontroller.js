
// userController.js

const User = require('../Models/user');

// Méthode pour créer un nouvel utilisateur
exports.createUser = async (req, res) => {
  try {
    // Récupérer les données du corps de la requête
    const { firstName, lastName, phone, email, password, role } = req.body;

    // Créer un nouvel utilisateur
    const newUser = new User({ firstName, lastName, phone, email, password, role });

    // Enregistrer l'utilisateur dans la base de données
    const savedUser = await newUser.save();

    // Envoyer la réponse
    res.status(201).json(savedUser);
  } catch (error) {
    // Gérer les erreurs
    res.status(500).json({ error: error.message });
  }
};

// Méthode pour récupérer tous les utilisateurs
exports.getUsers = async (req, res) => {
  try {
    // Récupérer tous les utilisateurs depuis la base de données
    const users = await User.find();

    // Envoyer la réponse
    res.json(users);
  } catch (error) {
    // Gérer les erreurs
    res.status(500).json({ error: error.message });
  }
};

// Autres méthodes de contrôleur pour les opérations CRUD sur les utilisateurs
// ...


