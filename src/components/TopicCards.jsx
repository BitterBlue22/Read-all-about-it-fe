import React from "react";
import { Link } from "@reach/router";

const TopicCards = ({ topic }) => {
  return (
    <div className="topic-card">
      <h2>Topic: {topic.slug}</h2>
      <span>{topic.description}</span>
      <br />
      <Link to="">Articles posted under this topic</Link>
      <br />
      <button>Post to this topic</button>
    </div>
  );
};

export default TopicCards;
