import React from "react";
import * as api from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteComment = ({ comment_id, removeComment }) => {
  const removeCommentById = () => {
    removeComment(comment_id);
    api.deleteCommentById(comment_id);
  };
  return (
    <button onClick={removeCommentById}>
      <FontAwesomeIcon icon="trash" />
      Delete
    </button>
  );
};

export default DeleteComment;
