const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    category: { type: String, require: true },
    // category: [{ name: { type: String, require: true } }],

    slug: { type: String, require: true, unique: true },
    origin: { type: String, require: false },
    typeOfFloor: { type: String, require: false },
    type: { type: String, require: false },
    class: { type: String, require: false },
    length: { type: String, require: false },
    width: { type: String, require: false },
    surfaceThickness: { type: String, require: false },
    bottomThickness: { type: String, require: false },
    about: { type: String, require: false },
    howToUse: { type: String, require: false },
    features: { type: String, require: false },
    images: { type: String, require: false },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
