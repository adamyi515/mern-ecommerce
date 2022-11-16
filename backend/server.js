const express = require('express');
const app = express();
const products = require('./data/products');

app.use('/api/products', require('./routes/products'));




app.listen(5000, () => console.log(`Server started on port: 5000`));