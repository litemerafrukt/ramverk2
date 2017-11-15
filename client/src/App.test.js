/* global it */
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<App />, div);
});

it("conforms to basic math", () => {
    1 === 1;
});
