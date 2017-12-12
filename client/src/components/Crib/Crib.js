import React, { Component } from "react";
import FetchState from "../../Types/FetchState.js";
import { Member } from "./Member";
import { EditMember } from "./EditMember";

const { PreFetch, Fetched, Fail } = FetchState;

const CribList = ({ crib, onRemove }) => (
    <div>
        {crib.map(member => (
            <Member
                key={member._id}
                _id={member._id}
                name={member.name}
                description={member.description}
                picture={member.picture}
                onRemove={onRemove}
            />
        ))}
    </div>
);

export class Crib extends Component {
    constructor(props) {
        super(props);

        this.state = {
            crib: PreFetch(),
            newMember: false
        };

        this.toggleNew = this.toggleNew.bind(this);
        this.handleSaveNewMember = this.handleSaveNewMember.bind(this);
        this.fetchCrib = this.fetchCrib.bind(this);
    }

    toggleNew() {
        this.setState(({ newMember }) => ({ newMember: !newMember }));
    }

    fetchCrib() {
        fetch("/api/xmas/crib")
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(crib => this.setState(() => ({ crib: Fetched(crib) })))
            .catch(e => this.setState(() => ({ crib: Fail(e) })));
    }

    saveNewMember(member) {
        fetch("/api/xmas/crib", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(member)
        });
    }

    handleSaveNewMember({ name, picture, description }) {
        name = name.trim();
        picture = picture.trim();
        description = description.trim();
        if (!name && !picture && !description) {
            return;
        }
        this.toggleNew();
        this.saveNewMember({ name, picture, description });
        this.fetchCrib();
    }

    componentDidMount() {
        this.fetchCrib();
    }

    render() {
        return (
            <div>
                <div className="underdash">
                    <h2>Julkrubban</h2>
                    <div>
                        <button onClick={this.toggleNew}>Lägg till...</button>
                        {this.state.newMember && <EditMember onSave={this.handleSaveNewMember} />}
                    </div>
                </div>

                {this.state.crib.matchWith({
                    PreFetch: () => <p>Hämtar julkrubba...</p>,
                    Fail: ({ error }) => (
                        <div>
                            Ajdå, fel vid hämtning:
                            <p>{`${error}`}</p>
                        </div>
                    ),
                    Fetched: ({ value }) => <CribList crib={value} onRemove={this.fetchCrib} />
                })}
            </div>
        );
    }
}
