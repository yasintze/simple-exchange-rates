// @flow
import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import lightGreen from "@material-ui/core/colors/lightGreen";
import { withStyles } from "@material-ui/core/styles";
import numeral from "numeral";

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

type State = {
  nominal: number,
  handleChange: Function
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

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      input: 10,
      nominal: numeral(10).format("0,0.00")
    };
  }

  componentDidMount() {
    const element = document.getElementById("initLoader");
    window.onload = () => {
      if (element) {
        element.remove();
      }
    };

    // Fetch rates data
    this.props.fetchFeed();
  }

  handleChange(value) {
    console.log(value);
    this.setState({
      input: value,
      nominal: numeral(value).format("0,0.00")
    });
  }

  render() {
    const { feed, date, isLoading, classes } = this.props;
    const { input, nominal } = this.state;

    return (
      <div>
        <Header
          input={input}
          nominal={nominal}
          onChange={e => this.handleChange(e.target.value)}
        />
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
