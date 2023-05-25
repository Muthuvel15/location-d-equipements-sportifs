const express = require('express');
const productctrl = require('../controllers/productcontroller');
const router = express.Router()


// Définir les routes
router.post('/', productctrl.createProduct)
router.put('/:id', productctrl.updateProduct)
router.delete('/:id', productctrl.deleteProduct)
router.get('/:id', productctrl.getProducteById)
router.get('/', productctrl.getProducts)





module.exports = router;
