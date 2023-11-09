const express = require("express");
const { addToCart, fetchCartByUser,deleteCart,updateCart } = require("../controller/Cart");

const router = express.Router();

router
  .post("/", addToCart)
  .get("/", fetchCartByUser)
  .patch("/:id", updateCart)
  .delete("/:id", deleteCart)


exports.router = router;
