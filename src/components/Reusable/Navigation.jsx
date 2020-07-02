import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Topics from "../Topics/Topics";
import Articles from "../Articles/Articles";
import Users from "../Users";
import { Tab, Tabs, Box } from "@material-ui/core";

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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}></Box>}
    </section>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <section className={classes.grow}>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledTypography className={classes.title} variant="h6" noWrap>
            Read all about it
          </StyledTypography>
          <Tabs variant="fullWidth" aria-label="nav tabs">
            <Tab label="Topics" href="/topics" {...a11yProps(0)} />
            <Tab label="Articles" href="/articles" {...a11yProps(1)} />
            <Tab label="Users" href="/users" {...a11yProps(2)} />
          </Tabs>
        </Toolbar>
      </StyledAppBar>

      <TabPanel index={0}>
        <Topics />
      </TabPanel>
      <TabPanel index={1}>
        <Articles />
      </TabPanel>
      <TabPanel index={2}>
        <Users />
      </TabPanel>
    </section>
  );
}
