<template>
    <div class="container">
        <app-header :availableFunds="availableFunds"
          :loadData="loadData"
          :saveData="saveData"
          :endDay="endDay"></app-header>
        <div class="row">
            <div class="col-xs-12">
                    <router-view :availableFunds="availableFunds"
                    :totalFunds="totalFunds"
                    :stocks="stocks"
                    :portfolio="portfolio"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapState } from "vuex";
import * as types from "./store/types";

export default {
  mounted() {
    this.loadData();
  },
  computed: mapState(["availableFunds", "totalFunds", "stocks", "portfolio"]),
  components: {
    appHeader: Header
  },
  methods: {
    loadData() {
      this.$store.dispatch(types.FETCH_FUNDS);
      this.$store.dispatch(types.FETCH_STOCKS);
    },
    saveData() {
      //extra check, so that user cannot manipulate DOM to perform illegal save operation
      if(this.availableFunds >= 0) {
        this.$store.dispatch(types.SAVE_DATA);
      }
    },
    endDay() {
      this.$store.dispatch(types.END_DAY);
    }
  }
};
</script>

<style>
body {
  padding: 30px;
}
</style>

