const express = require('express');
const cors = require('cors');
const routes = require('./routes/user_route');
const db = require('./conn');
const app = express();
const apiport = 3000;

app.use('/api/users', routes);

app.get('/', (req, res) => {
    res.send('hello world');
  });
app.listen(apiport, () => console.log(`Server running on port ${apiport}`));
