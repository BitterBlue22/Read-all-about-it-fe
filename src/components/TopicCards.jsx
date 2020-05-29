import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopicCards = ({ topic: { slug, description } }) => {
  return (
    <article className="topic-card">
      <h2>
        <FontAwesomeIcon icon="boxes" /> {slug}
      </h2>
      <span>{description}</span>
      <Link to={`/${slug}`}>
        <FontAwesomeIcon icon="newspaper" /> Articles
      </Link>
    </article>
  );
};

export default TopicCards;
