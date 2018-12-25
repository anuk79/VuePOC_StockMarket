<template>
    <div>
      <loadingSpinner v-if="isLoading" />
      <div v-else-if="error.length" class="alert">{{error}}</div>
      <div v-else>
        <h4>
            Total Investments: {{ totalFunds - availableFunds }}
        </h4>
        <app-stock :buttonLabel="buttonLabel"
          :clickHandler="sellStocks"
          :errorMessage="errorMessage"
          :isQuantityVisible="true" 
          :isError="isError"  
          v-for="(stock, index) in portfolio"
          :stock="stock"
          :key="index"   
        ></app-stock>
        </div>
    </div>
</template>

<script>
import Stock from "../common/Stock.vue";
import LoadingSpinner from "../common/LoadingSpinner.vue";
import { mapGetters } from "vuex";
import {
  SELL_FUNDS,
  IS_PORTFOLIO_LOADING,
  ERROR_FETCHING_PORTFOLIO
} from "../../store/types";

export default {
  components: {
    appStock: Stock,
    loadingSpinner: LoadingSpinner
  },
  data() {
    return {
      buttonLabel: "Sell",
      errorMessage: "You have insufficient stocks to sell!"
    };
  },
  props: ["portfolio", "totalFunds", "availableFunds"],
  computed: {
    ...mapGetters({
      isLoading: IS_PORTFOLIO_LOADING,
      error: ERROR_FETCHING_PORTFOLIO
    })
  },
  methods: {
    isError({ name, price }, quantity = 0) {
      return !this.portfolio.filter(
        portfolio => portfolio.name === name && portfolio.quantity >= quantity
      ).length;
    },
    sellStocks({ name, price }, quantity = 0) {
      this.$store.dispatch(SELL_FUNDS, { name, quantity, price });
    }
  }
};
</script>
<style scoped>
h4 {
  margin-left: 15px;
}
.alert {
  color: red;
  text-align: center;
}
</style>