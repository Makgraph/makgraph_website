const asyncHandler = require("express-async-handler");

const Product = require("../models/productsModel.js");

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const pageSize = 3; // Nombre de produits par page
  const page = Number(req.query.pageNumber) || 1; // Récupérer le numéro de page

  const count = await Product.countDocuments({});
  const products = await Product.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc Admin get all prouducts without search and pagination
// @route GET /api/products/all
// @access Private
// const getAllProductsAdmin = asyncHandler(async (req, res) => {
//   if (!req.user.isAdmin) {
//     res.status(401);
//     throw new Error("Non autorisé en tant qu'administrateur");
//   }

//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: "i",
//         },
//       }
//     : {};

//   const products = await Product.find({ ...keyword }).sort({ _id: -1 });
//   res.json(products);
// });
// const getAllProductsAdmin = asyncHandler(async (req, res) => {
//   if (!req.user.isAdmin) {
//     res.status(401);
//     throw new Error("Non autorisé en tant qu'administrateur");
//   }

//   const pageSize = 4;
//   const page = Number(req.query.pageNumber) || 1;
//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: "i",
//         },
//       }
//     : {};
//   const count = await Product.countDocuments({}).sort({ _id: -1 });
//   const products = await Product.find({ ...keyword })
//     .sort({ _id: -1 })
//     .limit(pageSize)
//     .skip(pageSize * (page - 1));
//   res.json({ products, page, pages: Math.ceil(count / pageSize) });
// });
const getAllProductsAdmin = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error("Non autorisé en tant qu'administrateur");
  }

  const pageSize = 4;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  // Compter les documents correspondant au mot-clé
  const count = await Product.countDocuments(keyword);

  // Récupérer les produits correspondant au mot-clé avec pagination
  const products = await Product.find(keyword)
    .sort({ _id: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    products,
    page,
    pages: Math.ceil(count / pageSize),
    count, // Fournir également le nombre total de produits correspondant au mot-clé
  });
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

// @desc Delete product
// @route DELETE /api/products/:id
// @access Admin
// const ProductDelete = asyncHandler(async (req, res) => {
//   if (!req.user.isAdmin) {
//     res.status(401);
//     throw new Error("Non autorisé en tant qu'administrateur");
//   }

//   const productId = req.params.id;
//   console.log("Product ID:", productId);

//   const product = await Product.findById(productId);
//   console.log("Product found:", product);

//   if (!product) {
//     res.status(404);
//     throw new Error("Produit non trouvé");
//   }

//   await product.remove();
//   res.json({ message: "Produit supprimé avec succès" });
// });
const ProductDelete = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error("Non autorisé en tant qu'administrateur");
  }

  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      res.status(404);
      throw new Error("Produit non trouvé");
    }

    await Product.deleteOne({ _id: productId });
    res.json({ message: "Produit supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du produit:", error.message);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du produit" });
  }
});

// @desc Create product
// @route POST /api/products/create
// @access Admin
const createProduct = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error("Non autorisé en tant qu'administrateur");
  }
  const { name, price, description, image, countInStock } = req.body;
  const productExist = await Product.findOne({ name });
  if (productExist) {
    res.status(400);
    throw new Error("Le nom du produit existe déjà");
  } else {
    const product = new Product({
      name,
      price,
      description,
      image,
      countInStock,
      // user: req.user._id,
    });
    if (product) {
      const createdproduct = await product.save();
      res.status(201).json(createdproduct);
    } else {
      res.status(404);
      throw new Error("Données produit invalides");
    }
  }
});

// @desc Create product
// @route POST /api/products/create
// @access Admin
const editProduct = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error("Non autorisé en tant qu'administrateur");
  }
  const { name, price, description, image, countInStock } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.json(404);
    throw new Error("Produit non trouvé");
  }
});

module.exports = {
  getAllProducts,
  getSingleProduct,
  ProductReview,
  getAllProductsAdmin,
  ProductDelete,
  createProduct,
  editProduct,
};
