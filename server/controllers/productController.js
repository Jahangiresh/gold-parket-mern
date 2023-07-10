const Product = require("../models/Product.js");

const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ message: "Məhsul silindi" });
  } catch (error) {
    res.status(404).send({ message: "Məhsul tapılmadı" });
  }
};
const getProductDetails = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
};
const editProductDetails = async (req, res) => {
  const prod = await Product.findOne({ _id: req.params.id });
  if (prod) {
    prod.name = req.body.name;
    prod.category = req.body.category;
    prod.origin = req.body.origin;
    prod.typeOfFloor = req.body.typeOfFloor;

    const updatedProduct = await prod.save();
    res.send({
      name: updatedProduct.name,
      category: updatedProduct.category,
      origin: updatedProduct.origin,
      typeOfFloor: updatedProduct.typeOfFloor,
    });
    res.send({ message: "Məhsul dəyişdirildi" });
  } else {
    res.status(404).send({ message: "Məhsul tapılmadı" });
  }
};

const createProduct = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    category: req.body.category,
    slug: req.body.slug,
    origin: req.body.origin,
    typeOfFloor: req.body.typeOfFloor,
    type: req.body.type,
    class: req.body.class,
    length: req.body.length,
    width: req.body.width,
    surfaceThickness: req.body.surfaceThickness,
    bottomThickness: req.body.bottomThickness,
    about: req.body.about,
    howToUse: req.body.howToUse,
    features: req.body.features,
  });
  const product = await newProduct.save();
  if (newProduct) {
    res.status(201).send({ message: "Məhsul uğurla yaradıldı", product });
  } else {
    res.status(404).send({ message: "Yenidən cəhd edin" });
  }
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send("Məhsullar tapılmadı");
  }
};

module.exports = {
  getProductDetails,
  createProduct,
  getProducts,
  deleteProduct,
  editProductDetails,
};
