import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home.js";
import { ChatPage } from "./pages/ChatPage.js";
import { CribPage } from "./pages/CribPage.js";
import { GomokuPage } from "./pages/GomokuPage.js";
import { Reports } from "./pages/Reports.js";
import { About } from "./pages/About.js";
import { NotFound404 } from "./pages/NotFound404.js";

// window.React = React;

export class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/chat" component={ChatPage} />
                    <Route path="/crib" component={CribPage} />
                    <Route path="/gomoku" component={GomokuPage} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound404} />
                </Switch>
            </Router>
        );
    }
}
