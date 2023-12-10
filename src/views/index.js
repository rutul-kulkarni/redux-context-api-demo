import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Link to="/redux-context-api">Redux & Context API</Link>
      <Link to="/timer">Timer</Link>
    </div>
  );
}

export default Layout;
