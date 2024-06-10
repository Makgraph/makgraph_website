const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Admin",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
