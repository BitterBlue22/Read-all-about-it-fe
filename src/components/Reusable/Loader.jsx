import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    marginLeft: 5,
  },
};
const SpinnerAdornment = withStyles(styles)((props) => (
  <CircularProgress
    className={props.classes.spinner}
    size={100}
    color="inherit"
  />
));
const Loader = () => {
  return (
    <section className="loader">
      <SpinnerAdornment />
    </section>
  );
};

export default Loader;
