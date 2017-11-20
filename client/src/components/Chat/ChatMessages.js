import React from "react";

export const ChatMessages = ({ messages }) => (
    <div>{messages.map((m, i) => <p key={i}>{m}</p>)}</div>
);
