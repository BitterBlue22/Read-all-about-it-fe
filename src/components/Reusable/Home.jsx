import React from "react";
import styled from "styled-components";

const WelcomeMessage = styled.h2`
  font-family: "Permanent Marker", cursive;
`;
const StyledSection = styled.section`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  alignt-items: center;
`;
const Home = () => {
  return (
    <StyledSection>
      <WelcomeMessage>Welcome to NC news!</WelcomeMessage>
    </StyledSection>
  );
};

export default Home;
