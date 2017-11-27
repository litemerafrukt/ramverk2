import React from "react";
import { Route } from "react-router-dom";
import { PageLayout } from "./../PageLayout.js";
import { ReportsMenu } from "./ReportsMenu.js";
import Report from "./Report";

export const Reports = () => (
    <PageLayout>
        <div className="textbox">
            <h2>Rapporter</h2>
            <div className="underdash" />
            <Route component={ReportsMenu} />
            <div className="underdash" />
            <Route path="/reports/:kmom" component={Report} />
        </div>
    </PageLayout>
);
