import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className="main-nav-bar">
      <Link to="/" className="nav-link">
        <h2>Home</h2>
      </Link>
      <Link to="/topics" className="nav-link">
        <h2>Topics</h2>
      </Link>
      <Link to="/articles" className="nav-link">
        <h2>Articles</h2>
      </Link>
      <Link to="/users" className="nav-link">
        <h2>Member's Area</h2>
      </Link>
    </nav>
  );
};

export default NavBar;
