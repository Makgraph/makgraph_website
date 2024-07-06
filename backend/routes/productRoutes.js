const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  ProductReview,
} = require("../controllers/productController.js");
const protect = require("../middleware/authMiddleware");

router.route("/").get(getAllProducts).post(getAllProducts);
router.route("/:id").get(getSingleProduct);
router.post("/:id/review", protect, ProductReview);

module.exports = router;
