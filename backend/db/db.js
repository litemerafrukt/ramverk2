"use strict";

const mongo = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const dbDo = dsn => async (...funcs) => {
    const db = await mongo.connect(dsn);
    let lastPromise = Promise.resolve();

    for (let fun of funcs) {
        lastPromise = await fun(db);
    }
    await db.close();
    return lastPromise;
};

const collectionDo = dbDo => collectionName => async (...funcs) => {
    const withCollection = async db => {
        const collection = await db.collection(collectionName);
        let lastPromise = Promise.resolve();

        for (let fun of funcs) {
            lastPromise = await fun(collection);
        }
        return lastPromise;
    };

    return await dbDo(withCollection);
};

/**
 *  :: (String, String, Object) -> Promise(void)
 */
const resetCollection = async (dsn, collectionName, documents) => {
    await collectionDo(dbDo(dsn))(collectionName)(
        collection => collection.deleteMany(),
        collection => collection.insertMany(documents)
    );
};

module.exports = { resetCollection, dbDo, collectionDo, ObjectID };
