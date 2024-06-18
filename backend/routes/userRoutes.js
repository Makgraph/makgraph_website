const express = require("express");
const router = express.Router();
const {
  registerUser,
  profile,
  loginUser,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
// const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
// router.get("/me", protect, getMe);
router.get("/profile", protect, profile);

module.exports = router;
