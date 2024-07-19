const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  ProductReview,
  getAllProductsAdmin,
  ProductDelete,
  createProduct,
  editProduct,
} = require("../controllers/productController.js");
const protect = require("../middleware/authMiddleware");

// Route pour récupérer tous les produits (route statique)
router.get("/all", protect, getAllProductsAdmin);

// Route pour récupérer tous les produits et pour ajouter un produit (route dynamique)
router.route("/").get(getAllProducts).post(getAllProducts);

router.post("/create", protect, createProduct);

// Route pour récupérer un produit spécifique
router.get("/:id", getSingleProduct);

router.delete("/:id", protect, ProductDelete);

router.put("/:id", protect, editProduct);

// Route pour ajouter une critique à un produit spécifique
router.post("/:id/review", protect, ProductReview);

module.exports = router;
