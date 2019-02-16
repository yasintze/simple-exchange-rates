// @flow
import React from "react";
import { connect } from "react-redux";

import fetchFeed from "./actions/feed";
import logo from "./logo.svg";
import "./App.css";

type Props = {
  feed: Array<Object>,
  fetchFeed: Function,
  isLoading: boolean
};

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
    const { feed, isLoading } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {isLoading && "Please wait.."}
          {feed && "Data loaded"}
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    feed: state.feedReducer.feed,
    loading: state.feedReducer.loading,
    error: state.feedReducer.error
  };
}

export default connect(
  mapStateToProps,
  { fetchFeed }
)(App);
