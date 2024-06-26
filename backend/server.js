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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api/makgraph", require("./routes/makgraphRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
