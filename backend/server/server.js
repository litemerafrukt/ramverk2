const http = require("http");

function createServer(app, port) {
    const server = http.createServer(app);

    server.listen(port);
    server.on("error", onError(port));
    server.on("listening", onListening);

    return server;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(port) {
    return error => {
        if (error.syscall !== "listen") {
            throw error;
        }

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case "EACCES":
                console.error("Port " + port + " requires elevated privileges");
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error("Port " + port + " is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    };
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = this.address();

    console.log(`Listening on port ${addr.port}`);
}

module.exports = { createServer };
