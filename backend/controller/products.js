const products = require('../data/products');

// @route   GET /api/products
// @desc    Get all products from the backend.
// @access  PRIVATE
const getProducts = (req, res) => {
    res.json(products);
}


// @route   GET /api/products
// @desc    Get all products from the backend.
// @access  PRIVATE
const getProduct = (req, res) => {
    const id = req.params.id;

    const product = products.find((product) => product._id === id);
    res.json(product);
}

module.exports = {
    getProducts
}