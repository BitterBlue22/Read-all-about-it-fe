import React from "react";
import { Link } from "@reach/router";
import Button from "../StyledComponents/Button";
import HeadingGeneral from "../StyledComponents/HeadingGeneral";
import StyledCard from "../StyledComponents/StyledCard";
import CardText from "../StyledComponents/CardText";

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

      <CardText>{author}</CardText>
      <CardText>comments: {comment_count}</CardText>
      <CardText>votes: {votes}</CardText>
      <h6>{created_at}</h6>
      <h6>Topic: {topic}</h6>
      <Link to={`/articles/${article_id}`} className="link">
        <Button>Read</Button>
      </Link>
    </StyledCard>
  );
};

export default ArticleCards;
