const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: String, required: true },
    tel: { type: String, required: true },
    email: { type: String, required: true },
    items: [{
      product : { type: String },
      qty: { type: Number },
      price: { type: String },
      note: { type: String }
    }] 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
