const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  // createProduct,
  // updateProduct,
  // deleteProduct,
} = require("../controllers/productController.js");

router.route("/").get(getAllProducts).post(getAllProducts);
router.route("/:id").get(getSingleProduct);
// .put(updateProduct)
// .delete(deleteProduct);

module.exports = router;
