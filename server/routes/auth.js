const router = require("express").Router();
const User = require("../models/User.js");
const { signIn, signUp } = require("../controllers/authController.js");
const CryptoJS = require("crypto-js");

router.post("/signup", signUp);

router.post("/signin", signIn);

module.exports = router;
