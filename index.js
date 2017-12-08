/**
 * Server entry-point
 */
"use strict";
const config = require("./backend/config");
const app = require("./backend/app");
const xmasCrib = require("./backend/xmas/crib");
const { createServer } = require("./backend/server/server");
const { createChat } = require("./backend/chat/chat");

async function main() {
    await xmasCrib.resetDb();
    // Create server
    const server = createServer(app, config.port);

    // Create chat
    createChat(server);
}

main().catch(err => console.error("Fatal error: ", err));
