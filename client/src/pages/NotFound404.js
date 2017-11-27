import React from "react";
import { PageLayout } from "./../PageLayout.js";

export const NotFound404 = ({ location }) => (
    <PageLayout>
        <h3>Routen "{location.pathname}" hittades inte.</h3>
    </PageLayout>
);
