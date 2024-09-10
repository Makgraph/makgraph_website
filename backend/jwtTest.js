require("dotenv").config(); // Charge les variables d'environnement
const jwt = require("jsonwebtoken");

// Utiliser la clé secrète depuis les variables d'environnement
const secret = process.env.JWT_SECRET;
console.log(secret);

if (!secret) {
  console.error(
    "La clé secrète JWT n'est pas définie dans les variables d'environnement."
  );
  process.exit(1);
}

// Génération d'un token
const token = jwt.sign({ id: "testUserId" }, secret, {
  expiresIn: "30d",
});
console.log("Generated Token:", token);

// Vérification du token
try {
  const decoded = jwt.verify(token, secret);
  console.log("Decoded Token:", decoded);
} catch (error) {
  console.error("Token verification failed:", error);
}
