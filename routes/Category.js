const express = require("express");
const { fetchAllCategory, createCategory } = require("../controller/Category");

const router = express.Router();

router.post("/", createCategory).get("/", fetchAllCategory);

exports.router = router;
