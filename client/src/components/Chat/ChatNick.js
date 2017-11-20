import React, { Component } from "react";

export class ChatNick extends Component {
    constructor(props) {
        super(props);
        this.state = { nick: "", error: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleChange(event) {
        const nick = event.target.value;

        this.setState(() => ({ nick, error: "" }));
    }

    handleOk() {
        const nick = this.state.nick.trim();

        if (nick === "") {
            this.setState(() => ({ nick, error: "Nick måste anges" }));
        } else {
            this.props.setNick(nick);
        }
    }

    handleEnter({ key }) {
        if (key === "Enter") {
            this.handleOk();
        }
    }

    render() {
        return (
            <div className="chat-set-nick">
                <input
                    value={this.state.nick}
                    type="text"
                    placeholder="nick"
                    onChange={this.handleChange}
                    onKeyDown={this.handleEnter}
                />

                <button onClick={this.handleOk}>Ok</button>
                {this.state.error !== "" && <p className="chat-error">{this.state.error}</p>}
            </div>
        );
    }
}
