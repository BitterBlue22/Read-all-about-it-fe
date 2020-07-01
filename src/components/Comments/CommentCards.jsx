import React from "react";
import DeleteComment from "./DeleteComment";
import VoteUpdater from "../Reusable/VoteUpdater";
import { Typography, Box, styled } from "@material-ui/core";
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "2rem",
  backgroundColor: "#D1E8E2",
  borderStyle: "ohidden",
  borderSpacing: "none",
  borderWidth: "1px",
  margin: "0px",
  width: "90%",
});

const CommentCards = ({
  removeComment,
  user,
  comment: { body, author, votes, created_at, comment_id },
}) => {
  return (
    <StyledBox className="comment-card">
      <Typography variant="h5">{author}</Typography>
      <Typography>{body}</Typography>
      <Typography>{created_at}</Typography>

      <VoteUpdater comment_id={comment_id} votes={votes} />

      {user === author && (
        <DeleteComment comment_id={comment_id} removeComment={removeComment} />
      )}
    </StyledBox>
  );
};

export default CommentCards;
