const mongoose = require("mongoose");

const makgraphSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "Ajouter une valeur de texte"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Makgraph", makgraphSchema);
