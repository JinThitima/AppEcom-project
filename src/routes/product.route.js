const express = require("express");
const app = express.Router();
const controller = require("../controllers/product.controller");

app.get("/", controller.getProduct);
app.get("/:id", controller.getProductById);
app.get("/name/:name", controller.getProductByName);
app.get("/catagory/:catagory", controller.getProductBycategory);

app.post("/", controller.createProduct);
app.put("/:id", controller.updateProduct);
app.patch("/:id", controller.addReview);
app.delete("/:id", controller.deleteProduct);

module.exports = app;
 
