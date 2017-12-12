import React, { Component } from "react";
// import { history } from "react-router-dom";
import { ImageBlob } from "../ImageBlob/ImageBlob.js";
import { EditMember } from "./EditMember";

export const Member = class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: this.props._id,
            name: this.props.name,
            picture: this.props.picture,
            description: this.props.description,
            toggleEdit: false
        };

        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.remove = this.remove.bind(this);
    }

    handleUpdate({ name, description, picture }) {
        const { _id, toggleEdit } = this.state;

        fetch(`/api/xmas/crib/${_id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify({ name, picture, description })
        });

        this.setState(() => ({ name, description, picture, toggleEdit: !toggleEdit }));
    }

    remove() {
        const { _id } = this.state;

        fetch(`/api/xmas/crib/${_id}`, {
            method: "DELETE"
        });

        // Cheap and simple, buhu.
        // window.location.reload();
        this.props.onRemove();
    }

    toggleEdit() {
        this.setState(({ toggleEdit }) => ({ toggleEdit: !toggleEdit }));
    }

    render() {
        const { name, description, picture, toggleEdit } = this.state;

        return (
            <div className="underdash">
                {!toggleEdit ? (
                    <div>
                        <ImageBlob url={picture} />
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <button onClick={this.toggleEdit}>Ändra</button>
                        <button onClick={this.remove}>Ta bort</button>
                    </div>
                ) : (
                    <div>
                        <EditMember
                            name={name}
                            description={description}
                            picture={picture}
                            onSave={this.handleUpdate}
                        />
                        <button onClick={this.toggleEdit}>Ångra</button>
                    </div>
                )}
            </div>
        );
    }
};
