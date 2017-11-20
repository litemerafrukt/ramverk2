/**
 * test chat server
 */
/* global test */
const os = require("os");
const server = require("http").createServer();
const clientIo = require("socket.io-client");

const { createChat } = require("./chat");
const chat = createChat(server);

var adress = "http://" + os.hostname() + ":1337";

server.listen(1337);

const options = {
    transports: ["websocket"],
    "force new connection": true
};

test("get something running", done => {
    const clientSocket = clientIo(adress, options);

    // console.log(chat);
    // console.log(clientSocket);
    setTimeout(() => {
        clientSocket.on("message", ({ message }) => {
            console.log(message);
            done();
        });
        clientSocket.emit("message", { nick: "test", message: "whatever" });
    }, 1000);

    chat.emit("message", { nick: "test", message: "whatever" });
});
