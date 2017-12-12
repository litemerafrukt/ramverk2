import React from "react";

import { Link, NavLink } from "react-router-dom";

export const SidebarMenu = () => (
    <div className="menu-logo">
        <h1 className="big-logo">
            <Link to="/">Anders Nygren</Link>
        </h1>
        <h5 className="sub-logo">
            Webbutveckling, fullstack, student@<a href="https://dbwebb.se">dbwebb</a>
        </h5>

        <div className="side-panel">
            <header>
                <div className="">
                    <nav className="header-nav">
                        <NavLink exact to="/" activeClassName="nav-selected">
                            Hem
                        </NavLink>
                        <NavLink to="/chat" activeClassName="nav-selected">
                            Chat
                        </NavLink>
                        <NavLink to="/crib" activeClassName="nav-selected">
                            Julkrubba
                        </NavLink>
                        <NavLink to="/reports" activeClassName="nav-selected">
                            Rapporter
                        </NavLink>
                        <NavLink to="/about" activeClassName="nav-selected">
                            Om
                        </NavLink>
                    </nav>
                </div>
            </header>
            <div className="contact">
                <h2>Kontakt</h2>

                <p>Bor och verkar i Skåne.</p>
                <p>
                    <a href="mailto:litemerafrukt@gmail.com">litemerafrukt@gmail.com</a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/anders-nygren-7a6aa113a/">LinkedIn</a>
                </p>
                <p>
                    <a href="https://twitter.com/litemerafrukt">Twitter</a>
                </p>
                <p>litemerafrukt på irc.bsnet.se</p>
                <p>
                    Träffas även på <a href="https://dbwebb.se/forum/">dbwebbs-forum</a>.
                </p>
            </div>
        </div>
    </div>
);
