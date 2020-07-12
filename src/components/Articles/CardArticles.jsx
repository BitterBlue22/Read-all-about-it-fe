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

const useStyles = makeStyles({
  root: {
    border: "1rem",

    borderStyle: "outline",
    borderColor: "#1c1308",
    background: "radial-gradient( #ccbda4, #e4c49b)",
    borderRadius: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    padding: "0.5rem",
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
  button: {
    borderStyle: "groove",
    border: "0.1rem",
    borderColor: "#2c3531",
    fontFamily: "IM Fell DW Pica SC",
    color: "#1c1308",
    backgroundColor: "#a48454",
  },
});

export default function OutlinedCard({
  article: {
    article_id,
    author,
    votes,
    title,
    topic,
    comment_count,
    created_at,
  },
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
          Topic: {topic}
          <br />
          Votes: {votes}
          <br />
          Comments: {comment_count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          size="small"
          to={`/articles/${article_id}`}
          component={Link}
        >
          Read
        </Button>
      </CardActions>
    </Card>
  );
}
