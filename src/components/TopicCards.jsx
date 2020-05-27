import React from "react";
import { Link } from "@reach/router";

const TopicCards = ({ topic: { slug, description } }) => {
  return (
    <div className="topic-card">
      <h2>Topic: {slug}</h2>
      <span>{description}</span>
      <br />
      <Link to={`/${slug}`}> Articles posted under this topic</Link>
      <br />
      <button>Post to this topic</button>
    </div>
  );
};

export default TopicCards;
