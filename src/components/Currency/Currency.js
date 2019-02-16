// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import numeral from "numeral";

type Props = {
  name: string,
  rate: number,
  value: number,
  detail: string,
  removeCurrency: Function,
  classes: Object
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  card: {
    minWidth: 275
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",
    maxWidth: 768,
    margin: "auto"
  },
  textBlack: {
    color: "black"
  }
});

const Currency = (props: Props) => {
  const { name, detail, rate, value, removeCurrency, classes } = props;

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                align="left"
                className={classes.textBlack}
                gutterBottom
              >
                {name}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="h5"
                align="right"
                className={classes.textBlack}
                gutterBottom
              >
                {numeral(value * rate).format("0,0.00")}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            align="left"
            className={classes.textBlack}
            gutterBottom
          >
            {detail}
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.textBlack}
            gutterBottom
          >
            {`1 USD = ${numeral(rate).format("0,0.00")} ${name}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={removeCurrency}
          >
            <span>Delete</span>
            <DeleteIcon className={classes.rightIcon} />
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default withStyles(styles)(Currency);
