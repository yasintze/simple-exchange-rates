import Api from "../api";

const url = "/latest?base=USD";

export const feed = {
  state: {
    result: [],
    date: null,
    isError: false,
    isLoading: false,
    hasFailed: false
  },
  reducers: {
    appendFeed(state, payload) {
      return {
        ...state,
        result: payload
      };
    },
    setDate(state, payload) {
      return {
        ...state,
        date: payload
      };
    },
    setError(state, payload) {
      return {
        ...state,
        isError: payload
      };
    },
    setLoading(state, payload) {
      return {
        ...state,
        isLoading: payload
      };
    },
    setHasFailed(state, payload) {
      return {
        ...state,
        hasFailed: payload
      };
    }
  },
  effects: dispatch => ({
    async fetchFeedAsync() {
      const res = await Api.get(url);
      const {
        data: { rates, date }
      } = res;
      dispatch.feed.appendFeed(rates);
      dispatch.feed.setDate(date);
    }
  })
};
