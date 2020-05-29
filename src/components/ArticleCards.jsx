import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <article className="article-card">
      <h2>{title}</h2>
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
      <Link to={`/articles/${article_id}`}>Read</Link>
    </article>
  );
};

export default ArticleCards;
