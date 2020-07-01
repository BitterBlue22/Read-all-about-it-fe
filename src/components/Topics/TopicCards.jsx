import React from "react";
import { Link } from "@reach/router";

import Button from "../StyledComponents/Button";
import HeadingGeneral from "../StyledComponents/HeadingGeneral";
import StyledCard from "../StyledComponents/StyledCard";
import CardText from "../StyledComponents/CardText";

const TopicCards = ({ topic: { slug, description } }) => {
  return (
    <StyledCard className="topic-card">
      <HeadingGeneral>{slug}</HeadingGeneral>
      <CardText>{description}</CardText>
      <Link to={`/${slug}`} className="link">
        <Button>Articles</Button>
      </Link>
    </StyledCard>
  );
};

export default TopicCards;
