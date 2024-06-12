const asyncHandler = require("express-async-handler");

const Product = require("../models/productsModel.js");

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(202).json(product);
  } else {
    res.status(404).json({ message: "Produit non trouvé" });
  }
});

// @desc Register new user
// @route POST /api/users
// @access Public
// const createProduct = asyncHandler(async (req, res) => {
//   const products = await Product.find({});
// });

// @desc Register new user
// @route POST /api/users
// @access Public
// const updateProduct = asyncHandler(async (req, res) => {
//   const products = await Product.find({});
// });

// @desc Register new user
// @route POST /api/users
// @access Public
// const deleteProduct = asyncHandler(async (req, res) => {
//   const products = await Product.find({});
// });

module.exports = {
  getAllProducts,
  getSingleProduct,
  // createProduct,
  // updateProduct,
  // deleteProduct,
};
