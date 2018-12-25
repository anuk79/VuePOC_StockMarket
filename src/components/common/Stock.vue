<template>
    <div>
            <div class="col-sm-6 col-md-4">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            {{ stock.name }}
                            <small>
                                (Price: $ {{ stock.price }} )
                            </small>
                            <small v-if="isQuantityVisible">
                                (Quantity: {{ stock.quantity }} )
                            </small>
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="pull-left">
                            <input  v-model.number="quantity"
                                    type="number"
                                    :class="[quantity<1 || isError(stock, quantity) 
                                    ? 'danger' : '', 'form-control']"
                                    placeholder="Quantity"
                            >
                    <span v-if="quantity>0 && isError(stock, quantity)" 
                        class="error-message">
                        {{errorMessage}}
                    </span>

                        </div>
                        <div class="pull-right">
                            <button @click="onClick(stock)"
                                    :disabled="quantity<1 || isError(stock, quantity)"
                                    class="btn btn-success">                            
                                        {{ buttonLabel }}
                            </button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: [
    "stock",
    "buttonLabel",
    "clickHandler",
    "errorMessage",
    "isError",
    "isQuantityVisible"
  ],
  methods: {
    onClick(stock) {
      this.clickHandler(stock, this.quantity);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
.error-message {
  color: red;
}
.panel-body {
  margin: 15px;
  padding: 0px;
  min-height: 55px;
}
</style>