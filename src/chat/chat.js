/**
 * Simple chat server with socket.io
 */

const IO = require("socket.io");

const setupConnectionProcedure = (chat, socket) => {
    socket.emit("requestNick", {}, nick => {
        console.log("send requestNick");
        socket.nick = nick;
        chat.emit("newFriend", { message: `${nick} anslöt till chatten.` });
    });
};

const setupDisconnectionProcedure = (chat, socket) => {
    socket.on("disconnect", reason => {
        chat.emit("lostFriend", { message: `${socket.nick} föll bort pga: ${reason}` });
    });
};

const setupMessageProcedure = (chat, socket) => {
    socket.on("message", ({ message }) => {
        chat.emit({ nick: socket.nick, message: message, time: Date.now() });
    });
};

const createChat = server => {
    const chat = new IO(server);

    chat.on("connection", socket => {
        setupConnectionProcedure(chat, socket);
        setupDisconnectionProcedure(chat, socket);
        setupMessageProcedure(chat, socket);
    });

    return chat;
};

module.exports = { createChat };
