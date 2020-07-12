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
    margin: "1rem",
    width: "15rem",
    height: "15rem",
    borderStyle: "outline",
    borderColor: "#1c1308",
    background: "radial-gradient( #ccbda4, #e4c49b)",
    borderRadius: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: "xx-large",
    fontFamily: "UnifrakturCook",
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
  des: {
    fontSize: "large",
    fontFamily: "IM Fell DW Pica SC",
    color: "#1c1308",
  },
});

export default function OutlinedCard({ topic: { slug, description } }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>{slug}</Typography>
        <Typography variant="body2" component="p" className={classes.des}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          size="small"
          component={Link}
          to={`/${slug}`}
        >
          See Articles
        </Button>
      </CardActions>
    </Card>
  );
}
