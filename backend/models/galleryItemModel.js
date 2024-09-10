const mongoose = require("mongoose");

const galleryItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ["image", "video"], required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GalleryItem", galleryItemSchema);
