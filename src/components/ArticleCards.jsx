import React from "react";
import { Link } from "@reach/router";

const ArticleCards = ({
  article: { article_id, author, votes, title, topic },
}) => {
  return (
    <article className="article-card">
      <h2>{title}</h2>
      <h5>
        by {author}, votes: {votes}
      </h5>
      <h4>Topic: {topic}</h4>
      <Link to={`/articles/${article_id}`}>Read</Link>
    </article>
  );
};

export default ArticleCards;
