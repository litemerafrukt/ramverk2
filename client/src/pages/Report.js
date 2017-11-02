import React from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { lensProp, set } from "ramda";
import { withRouter } from "react-router-dom";
import Type from "union-type";

/**
 * State type
 */
const ReportState = Type({
    Nothing: [],
    Fetching: [],
    KmomReport: [String],
    Fail: [String]
});

const contentLens = lensProp("content");

const { Nothing, Fetching, KmomReport, Fail } = ReportState;

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: Nothing };
    }

    fetchReport({ kmom }) {
        this.setState(set(contentLens, Fetching));
        axios(`/api/reports/${kmom}`)
            .then(({ data }) => this.setState(set(contentLens, KmomReport(data))))
            .catch(() =>
                this.setState(set(contentLens, Fail("Fel vid rapporthämtning. Är backend igång?")))
            );
    }

    componentDidMount() {
        this.fetchReport(this.props.match.params);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchReport(nextProps.match.params);
    }

    render() {
        return ReportState.case(
            {
                Nothing: () => <div />,
                Fetching: () => <h2>vänta lite bara...</h2>,
                Fail: message => <pre>{message}</pre>,
                KmomReport: text => <ReactMarkdown source={text} />
            },
            this.state.content
        );
    }
}

// const textLens = lensProp("text");

// class Report extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "wait for it..."
//         };
//     }

//     setStateText(text) {
//         this.setState(set(textLens, text));
//     }

//     fetchReport({ kmom }) {
//         axios(`/api/reports/${kmom}`)
//             .then(({ data }) => this.setStateText(data))
//             .catch(() => this.setStateText("Fel vid rapporthämtning. Är backend igång?"));
//     }

//     componentDidMount() {
//         this.fetchReport(this.props.match.params);
//     }

//     componentWillReceiveProps(nextProps) {
//         this.fetchReport(nextProps.match.params);
//     }

//     render() {
//         return <ReactMarkdown source={view(textLens, this.state)} />;
//     }
// }

export default withRouter(Report);
