import React from "react";
import { PageLayout } from "../PageLayout.js";
import { GomokuPlayself } from "../components/GomokuPlayself/GomokuPlayself.js";

export const GomokuPage = () => (
    <PageLayout>
        <h2>
            Test av <a href="https://www.npmjs.com/package/gomokuai">gomoku ai npm-modul</a>
        </h2>
        <p>Klicka för att se ai:n spelar mot sig själv.</p>
        <GomokuPlayself size={17} markers={["_", "X", "O"]} />
    </PageLayout>
);
