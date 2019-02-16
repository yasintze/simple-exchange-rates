import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";

import currency from "../../currency";
import InputNominal from "../InputNominal";

type Props = {
  input: number,
  nominal: string,
  onChange: Function,
  classes: Object
};

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const baseCurrency = "USD";

const Header = (props: Props) => {
  const { input, nominal, onChange, classes } = props;
  const baseCurrencyLabel = `${baseCurrency} - ${currency[baseCurrency]}`;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          {baseCurrencyLabel}
        </Typography>
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <AttachMoneyIcon />
          </div>
          <InputNominal input={input} nominal={nominal} onChange={onChange} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
