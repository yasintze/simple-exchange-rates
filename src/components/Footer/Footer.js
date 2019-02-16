// @flow
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

type Props = {
  date: string
};

const Footer = (props: Props) => {
  const { date } = props;
  const lastUpdatedInfo = `Rates last updated ${date}`;

  return (
    <Grid container>
      <Grid item xs>
        <Typography align="center" variant="overline" gutterBottom>
          {date && <strong>{lastUpdatedInfo}</strong>}
          <br />
          {"by "}
          <a href="https://github.com/yasintze/simple-exchange-rates">Yasin</a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
