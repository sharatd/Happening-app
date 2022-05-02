require("dotenv").config();
const express = require("express");
const router = express.Router();

const Developer = require("./schema/Developer.js");

// Define all API routes

router.route("/").get((req, res) => {
    res.status(200).send("<h1>Xenah-Dev-Portal API</h1>");
  });

  module.exports = router;
