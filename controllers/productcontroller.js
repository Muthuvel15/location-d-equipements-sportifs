// Importer le modèle Mongoose et le modèle de produit
const { model } = require('mongoose');
const Product = require('../Models/product');

// Fonction pour créer un produit
createProduct = (req, res) => {
    const body = req.body

    // Vérifier si le corps de la requête contient les informations du produit
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a product',
        })
    }

    // Créer une nouvelle instance du modèle de produit avec les données du corps de la requête
    const product = new Product(body)

    // Vérifier si la création du produit a échoué
    if (!product) {
        return res.status(400).json({ success: false, error: err })
    }

    // Enregistrer le produit dans la base de données
    product
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: product._id,
                message: 'product created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'product not created!',
            })
        })
}

// Fonction pour mettre à jour un produit
updateProduct = async (req, res) => {
    try {
        // Trouver et mettre à jour le produit avec l'ID spécifié
        const product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        ).exec();

        // Vérifier si le produit n'a pas été trouvé
        if (!product) {
            return res.status(404).json({ success: false, error: `product not found` });
        }

        // Retourner le produit mis à jour
        return res.status(200).json({ success: true, data: product });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}

// Fonction pour supprimer un produit
deleteProduct = async (req, res) => {
    try {
        // Trouver et supprimer le produit avec l'ID spécifié
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();

        // Vérifier si le produit n'a pas été trouvé
        if (!product) {
            return res.status(404).json({ success: false, error: `product not found` });
        }

        // Retourner le produit supprimé
        return res.status(200).json({ success: true, data: product });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}

// Fonction pour obtenir un produit par son ID
getProducteById = async (req, res) => {
    try {
        // Trouver le produit avec l'ID spécifié
        const product = await Product.findOne({ _id: req.params.id }).exec();

        // Vérifier si le produit n'a pas été trouvé
        if (!product) {
            return res.status(404).json({ success: false, error: `product not found` });
        }

        // Retourner le produit trouvé
        return res.status(200).json({ success: true, data: product });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}

// Fonction pour obtenir tous les produits
getProducts = async (req, res) => {
    // Obtenir tous les produits de la base de données
    const products = await Product.find({}).exec();

    // Vérifier si aucun produit n'a été trouvé
    if (!products.length) {
        return res.status(404).json({ success: false, error: 'products not found' });
    }

    // Retourner tous les produits trouvés
    return res.status(200).json({ success: true, data: products });
}

// Exporter les fonctions du module
module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducteById,
    getProducts
}
