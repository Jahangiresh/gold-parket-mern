const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
app.use(express.json());
const authRoute = require("./routes/auth.js");
const productRoute = require("./routes/product.js");

mongoose
  .connect(process.env.MONGO__URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("runn in 5000");
});
