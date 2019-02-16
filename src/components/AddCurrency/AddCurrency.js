// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

type Props = {
  data: Array<Object>,
  selected: string,
  onChange: Function,
  onClick: Function,
  classes: Object
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    maxWidth: 240
  },
  card: {
    minWidth: 275
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",
    minHeight: "calc(100vh - 180px)",
    maxWidth: 768,
    margin: "auto"
  },
  textBlack: {
    color: "black"
  }
});

const AddCurrency = (props: Props) => {
  const { data, selected, onChange, onClick, classes } = props;
  return (
    <Paper className={classes.paper}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="add-currency">Select currency</InputLabel>
        <Select
          value={selected}
          onChange={onChange}
          inputProps={{
            name: "add-currency",
            id: "add-currency"
          }}
        >
          <MenuItem value="">
            <em>Add more currency</em>
          </MenuItem>
          {Object.keys(data).map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={onClick}
      >
        {"Add Currency"}
      </Button>
    </Paper>
  );
};

export default withStyles(styles)(AddCurrency);
