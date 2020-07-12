import React from "react";
import {
  makeStyles,
  CardActions,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import VoteUpdater from "../Reusable/VoteUpdater";
import DeleteComment from "./DeleteComment";

const useStyles = makeStyles({
  root: {
    border: "1rem",
    margin: "1rem",
    borderStyle: "outline",
    background: "radial-gradient( #ccbda4, #e4c49b)",
    borderRadius: "0px",
  },

  title: {
    fontSize: "large",
    fontFamily: "IM Fell DW Pica SC",
    color: "#1c1308",
  },
  pos: {
    marginBottom: 12,
    fontFamily: "Cutive Mono",
    color: "#1c1308",
  },
  des: {
    fontSize: "large",
    fontFamily: "Cutive Mono",
    color: "#1c1308",
  },
});

export default function OutlinedCard({
  removeComment,
  user,
  comment: { body, author, votes, created_at, comment_id },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          {created_at}
        </Typography>

        <Typography className={classes.title} color="textSecondary">
          {author} commented:
        </Typography>
        <Typography variant="body2" component="p" className={classes.des}>
          {body}
        </Typography>
      </CardContent>
      {user === author && (
        <DeleteComment comment_id={comment_id} removeComment={removeComment} />
      )}
      <CardActions>
        <VoteUpdater comment_id={comment_id} votes={votes} />
      </CardActions>
    </Card>
  );
}
