import * as types from "./types";
import * as api from "../api/api";

export default {
  [types.END_DAY]: ({ commit }, payload) => {
    commit(types.MUTATE_STOCKS, payload);
  },
  [types.SAVE_DATA]: ({ commit, state }) => {
    let portfolioToBeSaved = {};
    state.portfolio.forEach(
      portfolio => (portfolioToBeSaved[portfolio.name] = portfolio.quantity)
    );

    let stocksToBeSaved = {};
    state.stocks.forEach(stock => (stocksToBeSaved[stock.name] = stock.price));

    api
      .savePortfolio(portfolioToBeSaved)
      .then(data => commit(types.SET_PORTFOLIO_LOADING_STATUS))
      .catch(error =>
        commit(types.SET_PORTFOLIO_LOADING_STATUS, {
          errorMessage: "Error saving portfolio data. Please try again!"
        })
      );

    api
      .saveStocks(stocksToBeSaved)
      .then(data => commit(types.SET_STOCKS_LOADING_STATUS))
      .catch(error =>
        commit(types.SET_STOCKS_LOADING_STATUS, {
          errorMessage: "Error saving stocks data. Please try again!"
        })
      );

    let fundsToBeSaved = {
      Available: state.availableFunds,
      Investments: state.totalFunds - state.availableFunds
    };
    api.saveFunds(fundsToBeSaved).catch(error => console.log("error", error));
  },

  [types.FETCH_STOCKS]: ({ commit, state }) => {
    api
      .getStocks()
      .then(data => {
        let stocks = [];
        for (let key in data) {
          stocks.push({ name: key, price: data[key], quantity: 0 });
        }
        commit(types.SET_STOCKS_LOADING_STATUS);
        commit(types.SET_STOCKS_DATA, stocks);
        api
          .getPortfolio()
          .then(data => {
            let portfolio = [];
            for (let key in data) {
              data[key] > 0 &&
                portfolio.push({
                  name: key,
                  quantity: data[key],
                  price: state.stocks.filter(stock => stock.name === key)[0]
                    .price
                });
            }
            commit(types.SET_PORTFOLIO_LOADING_STATUS);
            commit(types.SET_PORTFOLIO, portfolio);
          })
          .catch(error => {
            commit(types.SET_PORTFOLIO_LOADING_STATUS, {
              errorMessage: "Error fetching portfolio data. Please try again!"
            });
            commit(types.SET_PORTFOLIO, []);
          });
      })
      .catch(error => {
        commit(types.SET_STOCKS_LOADING_STATUS, {
          errorMessage: "Error fetching stocks data. Please try again!"
        });
        commit(types.SET_STOCKS_DATA, []);
      });
  },

  [types.FETCH_FUNDS]: ({ commit }) => {
    api
      .getFunds()
      .then(data => commit(types.SET_FUNDS, data))
      .catch(error => commit(types.SET_FUNDS));
  },

  [types.BUY_FUNDS]: ({ state, commit }, { name, quantity, price }) => {
    commit(types.MUTATE_FUNDS, {
      availableFunds: state.availableFunds - price * quantity
    });
    commit(types.MUTATE_PORTFOLIO, {
      name,
      quantity,
      price,
      isBuy: true
    });
  },
  [types.SELL_FUNDS]: ({ state, commit }, { name, quantity, price }) => {
    commit(types.MUTATE_FUNDS, {
      availableFunds: state.availableFunds + price * quantity
    });
    commit(types.MUTATE_PORTFOLIO, {
      name,
      quantity: quantity,
      price,
      isBuy: false
    });
  }
};
