import * as types from "./types";

export default {
  [types.IS_STOCK_DATA_LOADING]: (state) => {
    return state.fetchingStocks;
  },
  [types.IS_PORTFOLIO_LOADING]: (state) => {
    return state.fetchingPortfolio;
  },
  [types.ERROR_FETCHING_STOCKS]: (state) => {
    return state.errorFetchingStocks;
  },
  [types.ERROR_FETCHING_PORTFOLIO]: (state) => {
    return state.errorFetchingPortfolio;
  },
};
