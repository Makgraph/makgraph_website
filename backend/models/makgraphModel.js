const mongoose = require("mongoose");

const makgraphSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
