import React from "react";
import AddComment from "./AddComment";

const ArticleCards = ({ article }) => {
  //created_at
  //votes
  return (
    <article className="article-card">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <h5>by {article.author}</h5>

      <AddComment />
    </article>
  );
};

export default ArticleCards;
