const express = require("express");
const router = express.Router();

/* GET test-route. */
router.get("/", function(req, res) {
    res.send({ test: "test route serving json" });
});

module.exports = router;
