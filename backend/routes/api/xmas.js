const express = require("express");
const router = express.Router();
const path = require("path");

const crib = require("../../xmas/crib");

router.get("/crib", (req, res) => {
    crib
        .all()
        .then(crib => res.json(crib))
        .catch(err => res.status(500).json({ err: `${err}` }));
});

router.get("/crib/:id", (req, res) => {
    const { id } = req.params;

    crib
        .findOneById(id)
        .then(item => (item ? res.json(item) : res.status(404).json({})))
        .catch(err => res.status(500).json({ err: `${err}` }));
});

router.post("/crib", (req, res) => {
    const { name, description, picture } = req.body;

    crib
        .insert({ name, description, picture })
        .then(({ ops }) => res.json(ops[0]))
        .catch(err => res.status(500).json({ err: `${err}` }));
});

router.delete("/crib/:id", (req, res) => {
    const { id } = req.params;

    crib
        .removeById(id)
        .then(({ result }) => (result.n == 0 ? res.status(404).json(result) : res.json(result)))
        .catch(err => res.status(500).json({ err: `${err}` }));
});

router.put("/crib/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, picture } = req.body;

    crib
        .updateById(id, { name, description, picture })
        .then(() => crib.findOneById(id))
        .then(item => res.json(item))
        .catch(err => res.status(500).json({ err: `${err}` }));
});

router.get("/crib/image/:file", (req, res) => {
    const { file } = req.params;

    res.sendFile(path.join(__dirname, `../../xmas/img/${file}`));
});

module.exports = router;
