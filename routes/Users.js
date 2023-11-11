const express = require("express");
const { fetchUserById, updateUserById } = require("../controller/User");

const router = express.Router();

router.get("/own", fetchUserById).patch("/:id", updateUserById);

exports.router = router;
