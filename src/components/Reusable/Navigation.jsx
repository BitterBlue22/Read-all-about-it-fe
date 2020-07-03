import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const StyledTypography = styled(Typography)({
  margin: "2px",
  padding: "0 5% 0 0",
  fontFamily: "Permanent Marker",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#2c3531",
});

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <section className={classes.grow}>
      <StyledAppBar position="static">
        <StyledTypography>Read all about it!</StyledTypography>
        <nav variant="fullWidth" aria-label="nav tabs">
          <Tab label="Topics" href="/topics" value={0} />
          <Tab label="Articles" href="/articles" value={1} />
          <Tab label="Users" href="/users" value={2} />
        </nav>
      </StyledAppBar>{" "}
    </section>
  );
}
