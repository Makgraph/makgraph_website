const express = require("express");
const router = express.Router();
const {
  registerUser,
  profile,
  loginUser,
  updateProfile,
  getAllUserAdmin,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, profile);
router.put("/profile", protect, updateProfile);
router.get("/", protect, getAllUserAdmin);

module.exports = router;
