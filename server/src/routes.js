require("dotenv").config();
const express = require("express");
const router = express.Router();

const Developer = require("./schema/Developer.js");

// Define all API routes

router.route("/").get((req, res) => {
  res.status(200).send("<h1>Xenah-Dev-Portal API</h1>");
});

router.route("/developers")
  .get((req, res) => {
    Developer.find({}).then((data) => {
      res.status(200).send({ developers: data })
    });
  })
  .post((req, res) => {
    const { body } = req;

    const [isValid, err] = Developer.validate(body);
    if (!isValid) {
      res.status(404).send({ error: err });
      return;
    }

    const newDeveloper = new Developer(body);
    newDeveloper.save()
      .then(savedDeveloper => {
        res.status(204).send();
        return;
      })
      .catch(err => {
        res.status(500).send({ message: "Could not create developer", error: err });
        return;
      });
  });

module.exports = router;