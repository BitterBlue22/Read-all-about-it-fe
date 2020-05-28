import React from "react";
import * as api from "../utils/api";

const DeleteComment = ({ comment_id }) => {
  const removeCommentById = () => {
    api.deleteCommentById(comment_id);
  };
  return <button onClick={removeCommentById}>Delete</button>;
};

export default DeleteComment;
