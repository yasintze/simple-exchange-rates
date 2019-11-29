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
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import Currency from "./Currency";
import AddCurrency from "./AddCurrency";

type Props = {
  feed: Array<Object>,
  date: string,
  fetchFeedAsync: Function,
  loading: boolean,
  classes: Object
};

type State = {
  data: Array<Object>,
  selected: string,
  input: string,
  btnDisable: boolean,
  count: number
};

const styles = () => ({
  deviceHeight: {
    minHeight: "100vh",
    backgroundColor: lightGreen[100]
  },
  root: {
    flexGrow: 1,
    paddingTop: "7.5vh",
    backgroundColor: lightGreen[100]
  },
  lightGreenPaper: {
    backgroundColor: lightGreen[100]
  }
});

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      selected: "",
      input: "10",
      btnDisable: true,
      count: 0
    };
  }

  componentDidMount() {
    const element = document.getElementById("initLoader");
    const { fetchFeedAsync } = this.props;
    window.onload = () => {
      if (element) {
        element.remove();
      }
    };

    // Fetch rates data
    fetchFeedAsync();
  }

  handleInputFocus(value: string) {
    this.setState({
      input: numeral(value).value()
    });
  }

  handleInputBlur(value: string) {
    this.setState({
      input: numeral(value).format("0,0.00")
    });
  }

  handleInputChange(value: string) {
    this.setState({
      input: value
    });
  }

  handleSelectChange(value: string) {
    this.setState({
      selected: value,
      btnDisable: value === ""
    });
  }

  handleClickButton() {
    const { feed } = this.props;
    const { data, selected, count } = this.state;
    const newData = {
      id: count,
      name: selected,
      detail: currency[selected],
      rate: feed[selected]
    };
    this.setState({
      data: [...data, newData],
      selected: "",
      btnDisable: true,
      count: count + 1
    });
  }

  handleRemoveCurrency(id: number) {
    const { data, count } = this.state;
    const arr = data.filter(el => {
      return el.id !== id;
    });
    this.setState({
      data: arr,
      count: count - 1
    });
  }

  render() {
    const { feed, date, loading, classes } = this.props;
    const { data, selected, input, btnDisable } = this.state;

    return (
      <div className={classes.deviceHeight}>
        <Header
          input={input}
          onFocus={e => this.handleInputFocus(e.target.value)}
          onBlur={e => this.handleInputBlur(e.target.value)}
          onChange={e => this.handleInputChange(e.target.value)}
        />
        <div className={classes.root}>
          <Grid container>
            <Grid item xs>
              <Paper className={classes.lightGreenPaper}>
                {loading.modal && <Loader />}
                {data.map((item, id) => (
                  <Currency
                    key={item.name}
                    id={id}
                    name={item.name}
                    detail={item.detail}
                    rate={item.rate}
                    value={input}
                    removeCurrency={() => this.handleRemoveCurrency(id)}
                  />
                ))}
              </Paper>
              <AddCurrency
                data={feed}
                selected={selected}
                button={btnDisable}
                onChange={e => this.handleSelectChange(e.target.value)}
                onClick={() => this.handleClickButton()}
              />
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
    feed: state.feed.result,
    date: state.feed.date,
    loading: {
      global: state.loading.global,
      model: state.loading.models.feed
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFeedAsync: dispatch.feed.fetchFeedAsync
  };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
