import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "pages/Home";
import { Reports } from "pages/Reports";
import { About } from "pages/About";
import { NotFound404 } from "pages/NotFound404";

// window.React = React;

// export const Slope = () => (
export class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound404} />
                </Switch>
            </Router>
        );
    }
}
