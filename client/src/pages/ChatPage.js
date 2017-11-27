import React, { Component } from "react";
import { Just, Nothing } from "folktale/maybe";
import { PageLayout } from "../PageLayout.js";
import { Chat } from "../components/Chat/Chat.js";
import { ChatNick } from "../components/Chat/ChatNick.js";

export class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = { nick: Nothing() };

        this.setNick = this.setNick.bind(this);
    }

    setNick(nickString) {
        const nick = nickString === "" ? Nothing() : Just(nickString);

        this.setState(() => ({ nick }));
    }

    render() {
        return (
            <PageLayout>
                {this.state.nick.matchWith({
                    Just: ({ value }) => <Chat nick={value} />,
                    Nothing: () => <ChatNick setNick={this.setNick} />
                })}
            </PageLayout>
        );
    }
}
