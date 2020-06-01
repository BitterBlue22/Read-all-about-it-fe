import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../StyledComponents/Button";
import HeadingGeneral from "../StyledComponents/HeadingGeneral";
import StyledCard from "../StyledComponents/StyledCard";

const ArticleCards = ({
  article: {
    article_id,
    author,
    votes,
    title,
    topic,
    comment_count,
    created_at,
  },
}) => {
  return (
    <StyledCard className="article-card">
      <HeadingGeneral>{title}</HeadingGeneral>
      <h5>
        by <FontAwesomeIcon icon="user" />
        {author}, votes: {votes}
      </h5>
      <h5>
        {" "}
        <FontAwesomeIcon icon="comments" />
        comments: {comment_count}
      </h5>
      <FontAwesomeIcon icon="clock" />
      {created_at}
      <h6>Topic: {topic}</h6>
      <Link to={`/articles/${article_id}`} className="link">
        <Button>Read</Button>
      </Link>
    </StyledCard>
  );
};

export default ArticleCards;
