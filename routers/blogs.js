const express = require("express");
router = express.Router();

router.route("/").get(function (req, res) {
  res.status(200).send("Getting all blogs");
});

module.exports = router;