import React from "react";
import { SidebarMenu } from "./SidebarMenu";
import "./css/style.css";

export const PageLayout = ({ children }) => (
    <div className="app">
        <SidebarMenu />
        <main>
            <div className="container">{children}</div>
        </main>
    </div>
);
