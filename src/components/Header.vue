<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" exact>Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li" active-class="active">
                        <a>Portfolio</a>
                    </router-link>
                    <router-link to="/stocks" tag="li" active-class="active">
                        <a>Stocks</a>
                    </router-link>
                    
                </ul>
                <strong class="navbar-text navbar-right">
                     Available Funds: ${{availableFunds}}                  
                </strong>                
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click.prevent="endDay">End Day</a></li>
                    <li
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen=!isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li :title="errorMessage.length ? errorMessage : 'Save Data-will save your trading activities'">
                                <a href="#" 
                                    @click.prevent="saveData" 
                                    :class="{disabled: errorMessage.length}">Save Data</a>
                            </li>
                            <li title="Load Data-will undo all trading activities performed after last save">
                                <a href="#" 
                                    @click.prevent="loadData">Load Data</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  props: ["availableFunds", "loadData", "saveData", "endDay"],
  computed: {
    errorMessage() {
        //do not allow user to save data if available funds become negative after end day operation  
        return this.availableFunds >= 0 ? "" : "Can't save, insufficient funds!";
    }
  }
};
</script>

<style scoped>
.navbar-header {
  padding: 10px 15px;
  font-size: 20px;
}
.disabled {
  cursor: not-allowed;
  color: gray;
}
</style>