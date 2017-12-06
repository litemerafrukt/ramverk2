const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const Future = require("fluture");

const reportsDir = path.join(__dirname, "../../reports");

const getReport = filename =>
    Future.node(onComplete => {
        fs.readFile(`${reportsDir}/${filename}.md`, "utf8", onComplete);
    });

/* GET report-route. */
router.get("/:report", function(req, res) {
    getReport(req.params.report).fork(
        e => {
            res.status(404);
            res.json({ err: e });
        },
        f => {
            res.json(f);
        }
    );
});

module.exports = router;
