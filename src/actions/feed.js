import Api from "../api";

const url = "/latest?base=USD";

export function fetchFeedHasErrored(bool) {
  return {
    type: "FETCH_FEED_HAS_ERRORED",
    hasErrored: bool
  };
}

export function fetchFeedHasFailed(bool) {
  return {
    type: "FETCH_FEED_HAS_FAILED",
    hasFailed: bool
  };
}

export function fetchFeedIsLoading(bool) {
  return {
    type: "FETCH_FEED_IS_LOADING",
    isLoading: bool
  };
}

export function fetchFeedSuccess(response) {
  return {
    type: "FETCH_FEED",
    payload: response
  };
}

export default function fetchFeed() {
  return dispatch => {
    dispatch(fetchFeedIsLoading(true));

    Api.get(url, {
      validateStatus(status) {
        return status < 500; // Reject only if the status code is greater than or equal to 500
      }
    })
      .then(response => {
        dispatch(fetchFeedIsLoading(false));
        return response;
      })
      .then(response => dispatch(fetchFeedSuccess(response)))
      .catch(error => {
        if (error.request) {
          dispatch(fetchFeedHasFailed(true));
        } else {
          dispatch(fetchFeedHasErrored(true));
        }
      });
  };
}
