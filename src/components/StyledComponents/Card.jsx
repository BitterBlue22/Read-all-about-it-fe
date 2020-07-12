import React from "react";
import {
  makeStyles,
  CardActions,
  Card,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "@reach/router";
import VoteUpdater from "../Reusable/VoteUpdater";

const useStyles = makeStyles({
  root: {
    minWidth: "90%",
    border: "1rem",
    margin: "1rem",
    border: "0.5rem",
    borderStyle: "outline",
    background: "radial-gradient( #ccbda4, #e4c49b)",
    borderRadius: "0px",
  },

  title: {
    fontSize: "xx-large",
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
    fontFamily: "IM Fell DW Pica SC",
    color: "#1c1308",
  },
  button: { fontFamily: "IM Fell DW Pica SC" },
});

export default function OutlinedCard({
  article: { title, author, votes, created_at, article_id, body },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          {created_at}
        </Typography>
        <Typography className={classes.title} component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by {author}
        </Typography>
        <Typography variant="body2" component="p" className={classes.des}>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <VoteUpdater article_id={article_id} votes={votes} />
      </CardActions>
    </Card>
  );
}
