module.exports = {
    port: process.env.DBWEBB_PORT || process.env.PORT || process.env.LOCAL_DEV_PORT || 3000,
    xmasDb: {
        dsn: process.env.DBWEBB_DSN || process.env.DSN || "mongodb://localhost:27017/xmas",
        setupJson: "crib.json",
        collection: "crib"
    }
};
