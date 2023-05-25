# Application de location d'équipements sportifs

## Introduction
L'objectif de ce projet est de développer une application de location d'équipements sportifs en utilisant React pour le front-end, Node.js et Express pour le back-end, et MongoDB Atlas comme base de données. L'application permettra aux utilisateurs de s'inscrire en tant qu'adhérents, de se connecter, de consulter les produits disponibles, de gérer leur panier et de permettre à l'administrateur de gérer les produits.

## Pages de l'application

### Page d'inscription et de connexion
- Une page d'inscription permettant aux utilisateurs de créer un compte d'adhérent en fournissant les informations requises, telles que le nom, l'adresse e-mail et le mot de passe.
- Une page de connexion pour les utilisateurs déjà inscrits, où ils pourront saisir leurs identifiants pour accéder à l'application.

### Pages pour les adhérents
- Page de listing des produits : Une page où les adhérents pourront consulter les produits disponibles dans un domaine sportif spécifique, par exemple, les produits de football tels que les ballons, les chasubles, les maillots d'arbitre, etc., ou les produits de natation tels que les bonnets, les ballons de water-polo, les lunettes de plongée, etc. Les produits seront affichés avec leurs détails, tels que le nom, la description, le prix et la quantité disponible.
- Page du panier : Une page où les adhérents pourront confirmer leur sélection d'articles, ajouter ou supprimer des articles du panier, et passer à la confirmation de la location. Lorsqu'un adhérent confirme une location, la quantité disponible des articles sélectionnés sera mise à jour dans la base de données.

### Pages pour l'administrateur
- Les mêmes pages que pour les adhérents : L'administrateur aura accès aux mêmes pages que les adhérents pour consulter les produits et gérer son panier.
- Page de gestion des produits (CRUD) : Une page spécifique à l'administrateur permettant de gérer les produits. L'administrateur pourra effectuer les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les produits, tels que l'ajout de nouveaux produits, la modification des détails des produits existants et la suppression de produits de la base de données.

## Technologies utilisées
- Front-end : React
- Back-end : Node.js, Express
- Base de données : MongoDB Atlas
