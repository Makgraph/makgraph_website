const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
// const products = require("./data/products");
// const ImportData = require("./Seed");

const port = process.env.PORT || 5000;
dotenv;
connectDB();
const app = express();
app.use(cors());

// app.use("/api/import", ImportData);

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// Liste des domaines autorisés, vous pouvez ajouter plus de domaines si nécessaire
const allowedOrigins = [
  "https://makgraph-website-frontend.vercel.app", // Remplacez par l'URL de votre frontend Vercel
  "https://https://vercel.com/makgraph-e8918845/makgraph-website-frontend/E5aJiqNyyefDEyUSZVuVmN7MN7Hr", // Autres domaines autorisés
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
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
