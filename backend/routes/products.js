const express = require('express');
const router = express.Router();
const { getProducts, getProduct } = require('../controller/products');

router.get('/', getProducts);
router.get('/:id', getproduct);

module.exports = router
