// @flow
import React, { useState, useEffect } from "react";
import compose from "recompose/compose";
import { useSelector, useDispatch } from "react-redux";
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
  classes: Object
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

const App = (props: Props) => {
  const { classes } = props;
  const feed = useSelector(state => state.feed.result);
  const date = useSelector(state => state.feed.date);
  const loading = useSelector(state => state.loading.models.feed);
  const dispatch = useDispatch();

  const [data, setData] = useState<Array<Object>>([]);
  const [selected, setSelected] = useState<string>("");
  const [input, setInput] = useState<string>("10");
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const element = document.getElementById("initLoader");
    window.onload = () => {
      if (element) {
        element.remove();
      }
    };

    // Fetch rates data
    dispatch.feed.fetchFeedAsync();
  }, []);

  const handleInputBlur = value => {
    setInput(numeral(value).format("0,0.00"));
  };

  const handleSelectChange = value => {
    setSelected(value);
    setBtnDisable(value === "");
  };

  const handleClickButton = () => {
    const newData = {
      id: count,
      name: selected,
      detail: currency[selected],
      rate: feed[selected]
    };
    setData([...data, newData]);
    setSelected("");
    setBtnDisable(true);
    setCount(count + 1);
  };

  const handleRemoveCurrency = id => {
    const arr = data.filter(el => {
      return el.id !== id;
    });
    setData(arr);
    setCount(count - 1);
  };

  return (
    <div className={classes.deviceHeight}>
      <Header
        input={input}
        onFocus={e => setInput(e.target.value)}
        onBlur={e => handleInputBlur(e.target.value)}
        onChange={e => setInput(e.target.value)}
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
                  removeCurrency={() => handleRemoveCurrency(id)}
                />
              ))}
            </Paper>
            <AddCurrency
              data={feed}
              selected={selected}
              button={btnDisable}
              onChange={e => handleSelectChange(e.target.value)}
              onClick={() => handleClickButton()}
            />
          </Grid>
        </Grid>
        <Footer date={date} />
      </div>
    </div>
  );
};

export default compose(withStyles(styles))(App);
