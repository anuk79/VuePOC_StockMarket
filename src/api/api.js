import Vue from "vue";
import { PORTFOLIO_URL, FUNDS_URL, STOCKS_URL } from "./apiConstants";

const getFunds = () => {
  return Vue.http.get(FUNDS_URL).then(response => response.json());
};
const getStocks = () => {
  return Vue.http.get(STOCKS_URL).then(response => response.json());
};
const getPortfolio = () => {
  return Vue.http.get(PORTFOLIO_URL).then(response => response.json());
};
const saveStocks = stocksToBeSaved => {
  return Vue.http
    .patch(STOCKS_URL, stocksToBeSaved)
    .then(response => response.json());
};
const savePortfolio = portfolioToBeSaved => {
  return Vue.http
    .patch(PORTFOLIO_URL, portfolioToBeSaved)
    .then(response => response.json());
};
const saveFunds = fundsToBeSaved => {
  return Vue.http
    .patch(FUNDS_URL, fundsToBeSaved)
    .then(response => response.json());
};

export {
  getFunds,
  getStocks,
  getPortfolio,
  saveStocks,
  saveFunds,
  savePortfolio
};
