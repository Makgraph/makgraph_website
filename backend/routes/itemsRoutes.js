const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getSingleItem,
  getAllItemsAdmin,
  itemDelete,
  createItem,
  editItem,
} = require("../controllers/itemController.js");
const protect = require("../middleware/authMiddleware.js");

// Route pour récupérer tous les éléments (route statique)
router.get("/all", protect, getAllItemsAdmin);

// Route pour récupérer tous les éléments et pour ajouter un element (route dynamique)
router.route("/").get(getAllItems);

router.post("/create", protect, createItem);

// Route pour récupérer un élément spécifique
router.get("/:id", getSingleItem);

router.delete("/:id", protect, itemDelete);

router.put("/:id", protect, editItem);

module.exports = router;
