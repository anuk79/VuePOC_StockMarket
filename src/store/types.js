//getters
const IS_STOCK_DATA_LOADING = 'IS_STOCK_DATA_LOADING';
const IS_PORTFOLIO_LOADING = 'IS_PORTFOLIO_LOADING';
const ERROR_FETCHING_STOCKS = 'ERROR_FETCHING_STOCKS';
const ERROR_FETCHING_PORTFOLIO = 'ERROR_FETCHING_PORTFOLIO';
// Mutations
const SET_STOCKS_DATA = 'SET_STOCKS_DATA';
const SET_STOCKS_LOADING_STATUS = 'SET_STOCKS_LOADING_STATUS';
const SET_FUNDS = 'SET_FUNDS';
const SET_PORTFOLIO = 'SET_PORTFOLIO';
const SET_PORTFOLIO_LOADING_STATUS = 'SET_PORTFOLIO_LOADING_STATUS';
const MUTATE_FUNDS = 'MUTATE_FUNDS';
const MUTATE_STOCKS = 'MUTATE_STOCKS';
const MUTATE_PORTFOLIO = 'MUTATE_PORTFOLIO';
// Actions
const END_DAY = 'END_DAY';
const SAVE_DATA = 'SAVE_DATA';
const LOAD_DATA = 'LOAD_DATA';
const FETCH_FUNDS = 'FETCH_FUNDS';
const FETCH_STOCKS = 'FETCH_STOCKS';
const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO';
const BUY_FUNDS = 'BUY_FUNDS';
const SELL_FUNDS = 'SELL_FUNDS';

export {
    AVAILABLE_FUNDS,
    INVESTMENTS,
    MARKET_VARIATIONS,
    BUY_FUNDS,
    SELL_FUNDS,
    END_DAY,
    SAVE_DATA,
    LOAD_DATA,
    FETCH_STOCKS,
    SET_STOCKS_DATA,
    FETCH_FUNDS,
    SET_FUNDS,
    MUTATE_FUNDS,
    MUTATE_STOCKS,
    FETCH_PORTFOLIO,
    SET_PORTFOLIO,
    MUTATE_PORTFOLIO,
    SET_STOCKS_LOADING_STATUS,
    SET_PORTFOLIO_LOADING_STATUS,
    IS_STOCK_DATA_LOADING,
    IS_PORTFOLIO_LOADING,
    ERROR_FETCHING_STOCKS,
    ERROR_FETCHING_PORTFOLIO
}