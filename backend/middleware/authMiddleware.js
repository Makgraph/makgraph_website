const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const User = require("../models/usersModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Non autorisé");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Non autorisé, pas de token");
  }
});

// Middleware pour vérifier si l'utilisateur est administrateur
// const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next(); // Passe au middleware suivant
//   } else {
//     res.status(401);
//     throw new Error("Non autorisé en tant qu'administrateur");
//   }
// };

// module.exports = { protect, admin };
module.exports = protect;
