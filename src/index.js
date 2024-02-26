require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./db.js")(app);

const productRoute = require("./routes/product.route");
const orderRoute = require("./routes/order.route");
const userRoute = require("./routes/user.route");
app.use("/product", productRoute);
app.use("/order", orderRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});

