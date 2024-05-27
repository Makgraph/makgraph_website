const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Veuillez ajouter un nom"],
    },

    email: {
      type: String,
      require: [true, "Veuillez ajouter un email"],
      unique: true,
    },

    password: {
      type: String,
      require: [true, "Veuillez ajouter un password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
