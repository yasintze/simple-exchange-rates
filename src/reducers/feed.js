const defaultState = {
  feed: []
};

export default function feedReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case "FETCH_FEED": {
      const res = action.payload.data;
      return {
        ...state,
        feed: res.rates,
        date: res.date
      };
    }
    default:
      return state;
  }
}

export function feedReducerHasErrored(state = false, action) {
  switch (action.type) {
    case "FETCH_FEED_HAS_ERRORED":
      return action.hasErrored;

    default:
      return state;
  }
}

export function feedReducerHasFailed(state = false, action) {
  switch (action.type) {
    case "FETCH_FEED_HAS_FAILED":
      return action.hasFailed;

    default:
      return state;
  }
}

export function feedReducerIsLoading(state = false, action) {
  switch (action.type) {
    case "FETCH_FEED_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}
