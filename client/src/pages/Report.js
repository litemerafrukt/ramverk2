import React from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { lensProp, set, view } from "ramda";
import { withRouter } from "react-router-dom";

const textLens = lensProp("text");

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kmom: props.match.params.kmom,
            text: "wait for it..."
        };
    }

    setStateText(text) {
        this.setState(set(textLens, text));
    }

    fetchReport({ kmom }) {
        axios(`/api/reports/${kmom}`)
            .then(({ data }) => this.setStateText(data))
            .catch(() => this.setStateText("Fel vid rapporthämtning. Är backend igång?"));
    }

    componentDidMount() {
        this.fetchReport(this.props.match.params);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchReport(nextProps.match.params);
    }

    render() {
        return <ReactMarkdown source={view(textLens, this.state)} />;
    }
}

export default withRouter(Report);
