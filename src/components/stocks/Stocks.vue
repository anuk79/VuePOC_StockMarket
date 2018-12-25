<template>
    <div>
        <loadingSpinner v-if="isLoading" />
        <div v-else-if="error.length" class="alert">{{error}}</div>
        <app-stock v-else :buttonLabel="buttonLabel"
          :clickHandler="buyStocks"
          :errorMessage="errorMessage" 
          :isError="isError"   
          v-for="(stock, index) in stocks"
          :stock="stock"
          :key="index"  
        ></app-stock>
        </div>
</template>

<script>
import Stock from "../common/Stock.vue";
import LoadingSpinner from "../common/LoadingSpinner.vue";
import { mapGetters } from "vuex";
import {
  BUY_FUNDS,
  IS_STOCK_DATA_LOADING,
  ERROR_FETCHING_STOCKS
} from "../../store/types";

export default {
  components: {
    appStock: Stock,
    loadingSpinner: LoadingSpinner
  },
  data() {
    return {
      buttonLabel: "Buy",
      errorMessage: "You have unsufficient funds!"
    };
  },
  props: ["availableFunds", "stocks"],
  computed: {
    ...mapGetters({
      isLoading: IS_STOCK_DATA_LOADING,
      error: ERROR_FETCHING_STOCKS
    })
  },
  methods: {
    buyStocks({ name, price }, quantity) {
      this.$store.dispatch(BUY_FUNDS, {
        name,
        quantity,
        price
      });
    },
    isError({ name, price }, quantity) {
      return price * quantity > this.availableFunds;
    }
  }
};
</script>
<style scoped>
.alert {
  color: red;
  text-align: center;
}
</style>