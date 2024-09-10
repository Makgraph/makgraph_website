const crypto = require("crypto");

// Générer un secret aléatoire de 256 bits
const refreshSecret = crypto.randomBytes(32).toString("hex");
console.log("Generated Refresh Secret:", refreshSecret);
