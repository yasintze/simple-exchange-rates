import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";

type Props = {
  input: number,
  nominal: string,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  classes: Object
};

const styles = theme => ({
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const InputNominal = (props: Props) => {
  const { input, nominal, onFocus, onBlur, onChange, classes } = props;
  return (
    <InputBase
      placeholder="Enter Nominal.."
      value={input}
      onChange={onChange}
      autoFocus
      inputProps={{
        onFocus,
        onBlur,
        "aria-label": "input-rate"
      }}
      name="input-rate"
      id="input-rate"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput
      }}
    />
  );
};

export default withStyles(styles)(InputNominal);
