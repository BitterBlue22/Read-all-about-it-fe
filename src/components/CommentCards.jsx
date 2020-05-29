import React from "react";
import DeleteComment from "./DeleteComment";
import VoteUpdater from "./VoteUpdater";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentCards = ({
  removeComment,
  user,
  comment: { body, author, votes, created_at, article_id, comment_id },
}) => {
  return (
    <article className="comment-card">
      <p>{body}</p>
      <h5>
        posted by <FontAwesomeIcon icon="user" />
        {author} on <FontAwesomeIcon icon="clock" />
        {created_at}
        <VoteUpdater comment_id={comment_id} votes={votes} />
      </h5>
      {user === author && (
        <DeleteComment comment_id={comment_id} removeComment={removeComment} />
      )}
    </article>
  );
};

export default CommentCards;
