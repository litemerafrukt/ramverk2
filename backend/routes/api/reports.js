const express = require("express");
const router = express.Router();
const { promisify } = require("util");
const readFile = promisify(require("fs").readFile);
const path = require("path");

const reportsDir = path.join(__dirname, "../../reports");

const getReport = filename => readFile(`${reportsDir}/${filename}.md`, "utf8");

router.get("/:report", (req, res) => {
    getReport(req.params.report)
        .then(report => {
            res.json(report);
        })
        .catch(() => {
            res.status(404);
            res.json({ err: `Could not get report ${req.params.report}` });
        });
});

module.exports = router;
