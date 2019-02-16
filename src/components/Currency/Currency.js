// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import numeral from "numeral";

type Props = {
  header: string,
  description: number,
  meta: string,
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
  const { header, description, meta, classes } = props;
  const metaLabel = `1 USD = ${meta} ${header}`;

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h6"
            align="left"
            className={classes.textBlack}
            gutterBottom
          >
            {header}
          </Typography>
          <Typography
            variant="body1"
            align="left"
            className={classes.textBlack}
            gutterBottom
          >
            {metaLabel}
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.textBlack}
            gutterBottom
          >
            {numeral(description).format("0,0.00")}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
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
