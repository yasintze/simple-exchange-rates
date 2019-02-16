// @flow
import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

type Props = {
  date: string
};

const Footer = (props: Props) => {
  const { date } = props;
  const lastUpdatedInfo = `Last updated ${date} by Yasin`;

  return (
    <Grid container>
      <Grid item xs>
        <Typography align="center" variant="overline" gutterBottom>
          {date && <p>{lastUpdatedInfo}</p>}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
