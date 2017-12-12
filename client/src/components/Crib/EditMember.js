import React from "react";

export const EditMember = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name || "",
            picture: this.props.picture || "",
            description: this.props.description || ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name: inputBox, value: text } = event.target;

        this.setState(() => ({
            [inputBox]: text
        }));
    }

    render() {
        const { state: { name, picture, description }, props: { onSave } } = this;

        return (
            <div>
                <p>
                    <input
                        value={name}
                        onChange={this.handleChange}
                        name="name"
                        placeholder="Namn"
                    />
                </p>
                <p>
                    <input
                        value={picture}
                        onChange={this.handleChange}
                        name="picture"
                        placeholder="Bild-länk"
                    />
                </p>
                <p>
                    <input
                        value={description}
                        onChange={this.handleChange}
                        name="description"
                        placeholder="Beskrivning"
                    />
                </p>
                <button onClick={() => onSave(this.state)}>Spara</button>
            </div>
        );
    }
};
