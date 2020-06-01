import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #0f292f;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #cccccc;
`;

const Title = styled.h1`
  color: #cccccc;
  font-family: "Permanent Marker", cursive;
`;

const Header = ({ user: { username, avatar_url } }) => {
  return (
    <StyledHeader>
      <Title>NC News</Title>
      <p>Signed in as: {username}</p>
      <img src={avatar_url} alt="Avatar" className="user-avatar" />
    </StyledHeader>
  );
};

export default Header;
