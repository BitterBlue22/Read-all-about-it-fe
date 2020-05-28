import React from "react";
import DeleteComment from "./DeleteComment";

const CommentCards = ({
  removeCommentFromState,
  comment: { body, author, votes, created_at, article_id, comment_id },
}) => {
  return (
    <article className="comment-card">
      <p>votes: {votes}</p>
      <p>{body}</p>
      <h5>
        posted by {author} on {created_at}
      </h5>
      <DeleteComment comment_id={comment_id} />
    </article>
  );
};

export default CommentCards;
