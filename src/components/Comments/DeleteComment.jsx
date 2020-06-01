import React from "react";
import * as api from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../StyledComponents/Button";
import ErrorDisplay from "../Reusable/ErrorDisplay";

const DeleteComment = ({ comment_id, removeComment }) => {
  const removeCommentById = () => {
    removeComment(comment_id);
    api.deleteCommentById(comment_id).catch((err) => {
      return <ErrorDisplay msg={err} />;
    });
  };
  return (
    <Button onClick={removeCommentById}>
      <FontAwesomeIcon icon="trash" />
      Delete
    </Button>
  );
};

export default DeleteComment;
