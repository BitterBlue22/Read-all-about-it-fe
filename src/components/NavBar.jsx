import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="main-nav-bar">
      <Link to="/" className="nav-link">
        <h2>
          <FontAwesomeIcon icon="home" />
          Home
        </h2>
      </Link>
      <Link to="/topics" className="nav-link">
        <h2>
          <FontAwesomeIcon icon="boxes" />
          Topics
        </h2>
      </Link>
      <Link to="/articles" className="nav-link">
        <h2>
          <FontAwesomeIcon icon="newspaper" /> Articles
        </h2>
      </Link>
      <Link to="/users" className="nav-link">
        <h2>
          <FontAwesomeIcon icon="users" />
          Member's Area
        </h2>
      </Link>
    </nav>
  );
};

export default NavBar;
