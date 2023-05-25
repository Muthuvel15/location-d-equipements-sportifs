const express = require('express');
const cors = require('cors');
const db = require('./conn');
const app = express();
const apiport = 3000;
 
app.use(cors())
app.use(express.json());

const user_routes = require('./routes/user_route');
const product_routes = require('./routes/product_route');

app.use('/api/users',user_routes)
app.use('/api/products',product_routes)

app.get('/', (req, res) => {
  res.send('Connexion réussie !');
});
app.listen(apiport, () => console.log(`Server running on port ${apiport}`));
