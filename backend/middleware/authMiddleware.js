const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Vérifier la présence du token dans l'en-tête Authorization
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extraire le token de l'en-tête
      token = req.headers.authorization.split(" ")[1];

      // Vérifier le token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Récupérer l'utilisateur à partir du token
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        res.status(401);
        throw new Error("Utilisateur non trouvé");
      }

      next();
    } catch (error) {
      console.error("Token verification error:", error);
      if (error.name === "TokenExpiredError") {
        res
          .status(401)
          .json({ message: "Token expiré, veuillez vous reconnecter" });
      } else {
        res.status(401).json({ message: "Token invalide ou non autorisé" });
      }
    }
  } else {
    res.status(401).json({ message: "Pas de token fourni" });
  }
});

module.exports = protect;
