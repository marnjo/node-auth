const express = require('express');
const getRoutes = require('./api/routes/gettRoutes');
const postRoutes = require('./api/routes/postRoutes');

const app = express();

// middleware
app.use(express.json());
app.use(express.static('web'));
app.use(express.static('public'));


// routes.middleware
app.get('/', getRoutes);
app.get('/coding', getRoutes);
app.get('/about', getRoutes);
app.get('/contact', getRoutes);
app.get('/music', getRoutes);
app.post('/contact', postRoutes);


app.listen(3000, () => console.log('https://localhost:3000'))