import Vue from "vue";
import Vuex from "vuex";

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalFunds: 0,
    availableFunds: 0,
    isTrendPositive: true,
    stocks: [],
    portfolio: [],
    fetchingStocks: true,
    fetchingPortfolio: true,
    errorFetchingStocks: "",
    errorFetchingPortfolio: "",
  },
  mutations: mutations,
  actions: actions,
  getters: getters
});
