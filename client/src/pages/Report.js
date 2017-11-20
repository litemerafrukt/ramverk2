import React from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { withRouter } from "react-router-dom";
import union from "folktale/adt/union/union";

/**
 * State type
 */

const ReportState = union("ReportState", {
    Nothing() {
        return {};
    },
    Fetching() {
        return {};
    },
    ReportMD(report) {
        return { report };
    },
    Fail(reason) {
        return { reason };
    }
});

const { Nothing, Fetching, ReportMD, Fail } = ReportState;

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: Nothing() };
    }

    fetchReport({ kmom }) {
        this.setState(() => ({ content: Fetching() }));
        axios(`/api/reports/${kmom}`)
            .then(({ data }) => this.setState(() => ({ content: ReportMD(data) })))
            .catch(() =>
                this.setState(() => ({
                    content: Fail("Fel vid rapporthämtning. Är backend igång?")
                }))
            );
    }

    componentDidMount() {
        this.fetchReport(this.props.match.params);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchReport(nextProps.match.params);
    }

    render() {
        return this.state.content.matchWith({
            Nothing: () => <div />,
            Fetching: () => <h2>vänta lite bara...</h2>,
            Fail: ({ reason }) => <pre>{reason}</pre>,
            ReportMD: ({ report }) => <ReactMarkdown source={report} />
        });
    }
}

export default withRouter(Report);
