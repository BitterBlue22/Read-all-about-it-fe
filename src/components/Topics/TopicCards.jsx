import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../StyledComponents/Button";
import HeadingGeneral from "../StyledComponents/HeadingGeneral";
import StyledCard from "../StyledComponents/StyledCard";

const TopicCards = ({ topic: { slug, description } }) => {
  return (
    <StyledCard className="topic-card">
      <HeadingGeneral>{slug}</HeadingGeneral>
      <span>{description}</span>
      <Link to={`/${slug}`} className="link">
        <Button>
          <FontAwesomeIcon icon="newspaper" />
          Articles
        </Button>
      </Link>
    </StyledCard>
  );
};

export default TopicCards;
