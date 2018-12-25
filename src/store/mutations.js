import * as types from "./types";

export default {
  [types.MUTATE_STOCKS]: (state) => {
    let randomNumber = Math.floor(Math.random() * 5 + 1);
    let uodatedFunds = 0;
    //updating state stocks and portfolio based on price change
    state.stocks.forEach(stock => {
      let price = state.isTrendPositive
        ? stock.price + randomNumber
        : stock.price - randomNumber;
      price = price > 0 ? price : -price;
      stock.price = price;
      state.portfolio.forEach(data => {
        if (data.name === stock.name) {
          data.price = price;
          uodatedFunds += data.price * data.quantity;
        }
      });      
    });
    //updating state available funds based on price change
    state.availableFunds = state.totalFunds - uodatedFunds;
    state.isTrendPositive = !state.isTrendPositive;
  },
  [types.MUTATE_FUNDS]: (state, { availableFunds }) => {
    state.availableFunds = availableFunds;
  },
  [types.MUTATE_PORTFOLIO]: (state, { name, quantity, price, isBuy }) => {
    if (state.portfolio.filter(data => data.name === name).length) {
      state.portfolio.forEach(data => {
        if (data.name === name) {
          data.quantity = isBuy
            ? data.quantity + quantity
            : data.quantity - quantity;
          data.price = price;
        }
      });
    } else {
      state.portfolio.push({ name, quantity, price });
    }
  },
  [types.SET_STOCKS_DATA]: (state, stocks = []) => {
    state.stocks = stocks;
  },
  [types.SET_PORTFOLIO]: (state, portfolio = []) => {
    state.portfolio = portfolio;
  },
  [types.SET_FUNDS]: (state, funds) => {
    state.totalFunds = funds.Total;
    state.availableFunds = funds.Available;
  },
  [types.SET_STOCKS_LOADING_STATUS]: (state, { inProgress=false, errorMessage="" }={}) => {
    state.fetchingStocks = inProgress;
    state.errorFetchingStocks = errorMessage;
  },
  [types.SET_PORTFOLIO_LOADING_STATUS]: (state, { inProgress=false, errorMessage="" }={}) => {
    state.fetchingPortfolio = inProgress;
    state.errorFetchingPortfolio = errorMessage;
  }
};