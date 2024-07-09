const asyncHandler = require("express-async-handler");

const Product = require("../models/productsModel.js");

// @desc Fetch all products
// @route GET /api/products
// @access Public
// const getAllProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({});

//   res.json(products);
// });

const getAllProducts = asyncHandler(async (req, res) => {
  const pageSize = 3; // Nombre de produits par page
  const page = Number(req.query.pageNumber) || 1; // Récupérer le numéro de page

  const count = await Product.countDocuments({});
  const products = await Product.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Produit non trouvé" });
  }
});

// @desc Create productReview
// @route GET /api/products/:id
// @access Public
const ProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400).json({ message: "Produit déjà évalué" });
      return; // Assurez-vous de terminer l'exécution de la fonction ici
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Avis ajouté" });
  } else {
    res.status(404).json({ message: "Produit non trouvé" });
  }
});

module.exports = {
  getAllProducts,
  getSingleProduct,
  ProductReview,
};
