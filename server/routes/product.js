const router = require("express").Router();
const Product = require("../models/Product.js");
const {
  getProductDetails,
  createProduct,
  getProducts,
  deleteProduct,
  editProductDetails
} = require("../controllers/productController.js");
router.post("/create", createProduct);
router.get("/:slug", getProductDetails);
router.delete("/delete/:id", deleteProduct);
router.put("/edit/:id", editProductDetails);
router.get("/", getProducts);

module.exports = router;
