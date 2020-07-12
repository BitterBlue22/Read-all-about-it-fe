import React from "react";
import { Tab, Typography, makeStyles, styled, AppBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  tab: {
    fontFamily: "IM Fell DW Pica SC",
    color: "#e4c49b",
    fontSize: "large",
  },
}));

const StyledTypography = styled(Typography)({
  margin: "2px",
  padding: "0 5% 0 0",
  fontSize: "xx-large",
  color: "#ccbda4",
  fontFamily: "UnifrakturCook",
  textAlign: "center",
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#1c1308",
  marginBottom: "1rem",
});

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <section className={classes.grow}>
      <StyledAppBar position="static">
        <nav variant="fullWidth" aria-label="nav tabs">
          <StyledTypography>Read all about it!</StyledTypography>
          <Tab
            label="Topics"
            href="/topics"
            value={0}
            className={classes.tab}
          />
          <Tab
            label="Articles"
            href="/articles"
            value={1}
            className={classes.tab}
          />
          <Tab label="Users" href="/users" value={2} className={classes.tab} />
        </nav>
      </StyledAppBar>
    </section>
  );
}
