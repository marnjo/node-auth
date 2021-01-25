const express = require('express');
const getRoutes = require('./api/routes/gettRoutes');
const postRoutes = require('./api/routes/postRoutes');

const app = express();

// middleware
app.use(express.json());
app.use(express.static('web'))


// routes.middleware
app.get('/', getRoutes);
app.post('/', postRoutes);


app.listen(3000, () => console.log('https://localhost:3000'))