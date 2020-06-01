import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #501f3a;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const StyledNavButton = styled.div`
  font-family: "Permanent Marker", cursive;
  padding: 20px;
  color: white;
  &:hover {
    background-color: #14a098;
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <Link to="/" className="link">
        <StyledNavButton>
          <FontAwesomeIcon icon="home" />
          Home
        </StyledNavButton>
      </Link>
      <Link to="/topics" className="link">
        <StyledNavButton>
          <FontAwesomeIcon icon="boxes" />
          Topics
        </StyledNavButton>
      </Link>
      <Link to="/articles" className="link">
        <StyledNavButton>
          <FontAwesomeIcon icon="newspaper" /> Articles
        </StyledNavButton>
      </Link>
      <Link to="/users" className="link">
        <StyledNavButton>
          <FontAwesomeIcon icon="users" />
          Member's Area
        </StyledNavButton>
      </Link>
    </StyledNav>
  );
};

export default NavBar;
