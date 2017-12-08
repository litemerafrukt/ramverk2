"use strict";
const { promisify } = require("util");
const readFile = promisify(require("fs").readFile);
const path = require("path");

const config = require("../config");
const db = require("../db/db");

const dsn = config.xmasDb.dsn;
const collection = config.xmasDb.collection;
const xmasDo = db.dbDo(dsn);
const cribDo = db.collectionDo(xmasDo)(collection);

const resetDb = async () => {
    const jsonDocs = await readFile(path.resolve(__dirname, config.xmasDb.setupJson), "utf8");
    const docs = await JSON.parse(jsonDocs);

    await db.resetCollection(dsn, collection, docs).catch(console.error.bind(console));
};

const all = () => cribDo(crib => crib.find().toArray());
const findMany = search => cribDo(crib => crib.find(search).toArray());
const findOneById = id => cribDo(crib => crib.findOne({ _id: db.ObjectID(id) }));
const insert = item => cribDo(crib => crib.insert(item));
const removeById = id => cribDo(crib => crib.remove({ _id: db.ObjectID(id) }));
const updateById = (id, item) =>
    cribDo(crib => crib.update({ _id: db.ObjectID(id) }, { $set: item }));

module.exports = { all, findMany, findOneById, insert, removeById, updateById, cribDo, resetDb };
