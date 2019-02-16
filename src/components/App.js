// @flow
import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import lightGreen from "@material-ui/core/colors/lightGreen";
import { withStyles } from "@material-ui/core/styles";

import currency from "../currency";
import fetchFeed from "../actions/feed";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import Currency from "./Currency";

type Props = {
  feed: Array<Object>,
  date: string,
  fetchFeed: Function,
  isLoading: boolean,
  classes: Object
};

const styles = () => ({
  root: {
    flexGrow: 1,
    paddingTop: "7.5vh",
    backgroundColor: lightGreen[100]
  },
  greyPaper: {
    backgroundColor: lightGreen[100]
  }
});

class App extends React.Component<Props> {
  componentDidMount() {
    const element = document.getElementById("initLoader");
    window.onload = () => {
      if (element) {
        element.remove();
      }
    };
    this.props.fetchFeed();
  }

  render() {
    const { feed, date, isLoading, classes } = this.props;

    return (
      <div>
        <Header />
        <div className={classes.root}>
          <Grid container>
            <Grid item xs>
              <Paper className={classes.greyPaper}>
                {isLoading && <Loader />}
                {feed &&
                  Object.keys(feed).map(rate => (
                    <Currency
                      key={rate}
                      header={rate}
                      meta={feed[rate]}
                      description={currency[rate]}
                    />
                  ))}
              </Paper>
            </Grid>
          </Grid>
          <Footer date={date} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    feed: state.feedReducer.feed,
    date: state.feedReducer.date,
    loading: state.feedReducer.loading,
    error: state.feedReducer.error
  };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { fetchFeed }
  )
)(App);
