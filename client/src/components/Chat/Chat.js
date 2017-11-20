import React from "react";
import io from "socket.io-client";
import { ChatMessages } from "./ChatMessages";

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: ["empty", "not so"] };
    }

    componentDidMount() {
        const socket = io();

        socket.on("connect", () => {
            console.log("connected: ");
        });

        socket.on("requestNick", (_, fun) => console.log("got requestNick") || fun("whatever"));

        socket.on("newFriend", ({ message }) => {
            this.setState(prevState => prevState.messages.push(message));
        });
        socket.on("message", ({ nick, message }) => {
            console.log(`${nick}: ${message}`);
            this.setState(prevState => prevState.messages.push(`${nick}: ${message}`));
        });
    }

    render() {
        return (
            <div>
                <ChatMessages messages={this.state.messages} />
            </div>
        );
    }
}
