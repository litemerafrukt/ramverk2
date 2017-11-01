import React from "react";
import { NavLink } from "react-router-dom";

export const ReportsMenu = () => (
    <ul className="kmom-list">
        <li>
            <NavLink to="/reports/kmom01" activeClassName="nav-selected">
                Kmom01
            </NavLink>
        </li>
        <li>
            <NavLink to="/reports/kmom02" activeClassName="nav-selected">
                Kmom02
            </NavLink>
        </li>
        <li>
            <NavLink to="/reports/kmom03" activeClassName="nav-selected">
                Kmom03
            </NavLink>
        </li>
        <li>
            <NavLink to="/reports/kmom04" activeClassName="nav-selected">
                Kmom04
            </NavLink>
        </li>
        <li>
            <NavLink to="/reports/kmom05" activeClassName="nav-selected">
                Kmom05
            </NavLink>
        </li>
        <li>
            <NavLink to="/reports/kmom06" activeClassName="nav-selected">
                Kmom06
            </NavLink>
        </li>
        <li>
            <NavLink to="/reports/kmom10" activeClassName="nav-selected">
                Kmom10
            </NavLink>
        </li>
    </ul>
);
