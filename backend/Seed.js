const express = require("express");
const User = require("./models/usersModel.js");
const users = require("./data/users.js");
const Product = require("./models/productsModel.js");
const products = require("./data/products.js");

const ImportData = express.Router();

ImportData.post("/user", async (req, res) => {
  await User.deleteMany();
  const Users = await User.insertMany(users);
  res.send({ Users });
});

ImportData.post("/products", async (req, res) => {
  await Product.deleteMany();
  const Products = await Product.insertMany(products);
  res.send({ Products });
});

module.exports = ImportData;
