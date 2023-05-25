const mongoose = require('mongoose')

const url='mongodb+srv://Muthuvel:muthuvel123@cluster1.ibatkxp.mongodb.net/Sport?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connecté à MongoDB');
  // Continuez avec le reste de votre code ici
})
.catch(err => {
  console.error('Erreur de connexion à MongoDB :', err.message);
  // Gérez l'erreur de connexion ici
});