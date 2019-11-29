import Api from "../api";

const url = "/latest?base=USD";

export const feed = {
  state: {
    result: [],
    date: null
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
