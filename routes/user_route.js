const express = require('express');
const Usertrl = require('../controllers/usercontroller');
// Importez d'autres contrôleurs et modèles nécessaires
const router = express.Router()

// Définir les routes
router.post('/', Usertrl.createUser)
router.put('/:id', Usertrl.updateUser)
router.delete('/:id', Usertrl.deleteuser)
router.get('/:id', Usertrl.getuserById)
router.get('/', Usertrl.getUsers)




module.exports = router;
