const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");
// const products = require("./data/products");
// const ImportData = require("./Seed");

const port = process.env.PORT || 5000;
dotenv;
connectDB();
const app = express();
app.use(cors());

// const jwt = require("jsonwebtoken");

// const secret = process.env.JWT_SECRET;
// if (!secret) {
//   console.error(
//     "La clé secrète JWT n'est pas définie dans les variables d'environnement."
//   );
//   process.exit(1);
// }

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3RVc2VySWQiLCJpYXQiOjE3MjU1NjA2MTUsImV4cCI6MTcyODE1MjYxNX0.SfrWoGCKeh3sbDVgvfKEFKqWWLqZhl1VkM1FA6LhT8U";

// try {
//   const decoded = jwt.verify(token, secret);
//   console.log("Decoded Token:", decoded);
// } catch (error) {
//   console.error("Token verification failed:", error);
// }

// Afficher les variables d'environnement pour déboguer
// console.log("JWT_SECRET:", process.env.JWT_SECRET);
// console.log("JWT_REFRESH_SECRET:", process.env.JWT_REFRESH_SECRET);

// app.use("/api/import", ImportData);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// Liste des domaines autorisés, vous pouvez ajouter plus de domaines si nécessaire
// const allowedOrigins = [
//   "https://makgraph-website-frontend.vercel.app", // Remplacez par l'URL de votre frontend Vercel
//   "https://vercel.com/makgraph-e8918845/makgraph-website-frontend/E5aJiqNyyefDEyUSZVuVmN7MN7Hr", // Autres domaines autorisés
//   "http://localhost:5173",
//   "http://localhost:5174",
// ];
const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5176",
  "https://makgraph-website-frontend.vercel.app",
  "https://vercel.com/makgraph-e8918845/makgraph-website-frontend/E5aJiqNyyefDEyUSZVuVmN7MN7Hr",
  "https://makgraph-website-dashboard.vercel.app/",
  "makgraph-website-dashboard-254owiy73-makgraph-e8918845.vercel.app",
];

// Configurer CORS
app.use(
  cors({
    origin: function (origin, callback) {
      // Autoriser les requêtes sans origine (pour les tests locaux)
      if (!origin) return callback(null, true);

      // Vérifier si l'origine est dans la liste des origines autorisées
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("Not allowed by CORS"), false);
      }

      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api/makgraph", require("./routes/makgraphRoutes"));
// app.use("/api/auth", authRoutes);
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/items", require("./routes/itemsRoutes"));
app.use("/api/orders", require("./routes/orderRoutes.js"));
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
