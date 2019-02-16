// @flow
import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.exchangeratesapi.io/",
  headers: {
    "Content-Type": "application/json"
  }
});

export default Api;
