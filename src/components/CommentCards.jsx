import React from "react";

const CommentCards = ({
  comment: { body, author, votes, created_at, article_id, comment_id },
}) => {
  return (
    <article className="comment-card">
      <h5>{article_id}</h5> <p>votes: {votes}</p>
      <p>{body}</p>
      <h5>
        posted by {author} on {created_at}
      </h5>
    </article>
  );
};

export default CommentCards;
