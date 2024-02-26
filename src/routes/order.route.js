const express = require("express");
const app = express.Router();
const controller = require("../controllers/order.controller");

app.get("/", controller.getOrder);
app.get("/:id", controller.getOrderById);

app.post("/", controller.createOrder);
app.put("/:id", controller.updateOrder);
app.delete("/:id", controller.deleteOrder);

module.exports = app;