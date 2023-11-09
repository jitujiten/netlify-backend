const express = require("express");
const { fetchOrderByUser, CreateOrder, updateOrder, deleteOrder } = require("../controller/Order");


const router = express.Router();

router
  .post("/",CreateOrder)
  .get("/", fetchOrderByUser)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder)
 


exports.router = router;
