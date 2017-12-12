import React, { Component } from "react";
import FetchState from "../../Types/FetchState.js";

const { PreFetch, Fetched, Fail } = FetchState;

export class ImageBlob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: this.props.url,
            imageBlob: PreFetch()
        };
    }

    fetchImage() {
        fetch(this.state.imageUrl)
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.blob();
            })
            .then(blob => this.setState(() => ({ imageBlob: Fetched(URL.createObjectURL(blob)) })))
            .catch(e => this.setState(() => ({ imageBlob: Fail(e) })));
    }

    componentDidMount() {
        this.state.imageBlob.matchWith({
            PreFetch: () => this.fetchImage(),
            Fail: () => this.fetchImage(),
            Fetched: () => ({})
        });
    }

    render() {
        const image = this.state.imageBlob.matchWith({
            PreFetch: () => <span>Hämtar bild...</span>,
            Fail: ({ error }) => (
                <span>
                    Något gick galet med {`${this.state.imageUrl}`}. {`${error}`}
                </span>
            ),
            Fetched: ({ value }) => <img className="selfie" src={value} alt={this.state.imageUrl} />
        });

        return <div>{image}</div>;
    }
}
