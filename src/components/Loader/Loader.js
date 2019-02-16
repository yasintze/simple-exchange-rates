// @flow
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

type Props = {
  classes: Object
};

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

const Loader = (props: Props) => {
  const { classes } = props;
  return <CircularProgress className={classes.progress} />;
};

export default withStyles(styles)(Loader);
