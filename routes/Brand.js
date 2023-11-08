const express = require("express");
const { fetchAllBrand, createBrand } = require("../controller/Brand");

const router = express.Router();

router.post("/", createBrand).get("/", fetchAllBrand);

exports.router = router;
