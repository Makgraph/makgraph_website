const express = require("express");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const router = express.Router();

router.post(
  "/refresh-token",
  asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(400).json({ message: "Refresh token requis" });
      return;
    }

    try {
      // Vérifier le refresh token
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

      // Générer un nouveau token d'accès
      const newToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      res.json({ token: newToken });
    } catch (error) {
      res.status(401).json({ message: "Refresh token invalide ou expiré" });
    }
  })
);

module.exports = router;
