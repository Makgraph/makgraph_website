const express = require("express");
const router = express.Router();
const {
  registerUser,
  profile,
  loginUser,
  updateProfile,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, profile);
router.put("/profile", protect, updateProfile);

module.exports = router;
