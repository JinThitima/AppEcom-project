const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    model: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    images: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    unit: { type: String, required: true },
    detail: { type: String, required: true },
    reviews: [{ message: String, star: Number }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productsSchema);